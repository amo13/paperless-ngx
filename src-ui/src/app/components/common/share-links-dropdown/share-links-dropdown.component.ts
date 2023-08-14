import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { first } from 'rxjs'
import {
  PaperlessShareLink,
  PaperlessShareLinkDocumentVersion,
} from 'src/app/data/paperless-share-link'
import { ShareLinkService } from 'src/app/services/rest/share-link.service'
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-share-links-dropdown',
  templateUrl: './share-links-dropdown.component.html',
  styleUrls: ['./share-links-dropdown.component.scss'],
})
export class ShareLinksDropdownComponent implements OnInit {
  @Input()
  title = $localize`Share Links`

  _documentId: number

  @Input()
  set documentId(id: number) {
    this._documentId = id
    this.refresh()
  }

  @Input()
  message: string

  shareLinks: PaperlessShareLink[]

  buttonsEnabled: boolean = true

  loading: boolean = false

  constructor(private shareLinkService: ShareLinkService) {}

  ngOnInit(): void {
    this.refresh()
  }

  refresh() {
    if (!this._documentId) return
    this.loading = true
    this.shareLinkService
      .getLinksForDocument(this._documentId)
      .pipe(first())
      .subscribe({
        next: (results) => {
          this.loading = false
          this.shareLinks = results
        },
        error: (e) => {
          this.message = JSON.stringify(e)
        },
      })
  }

  copy(link: PaperlessShareLink) {
    const url = `${environment.apiBaseUrl.replace('api', 'share')}${link.slug}`
    navigator.clipboard.writeText(url)
  }

  delete(link: PaperlessShareLink) {
    this.shareLinkService.delete(link).subscribe({
      next: () => {
        this.refresh()
      },
      error: (e) => {
        this.message = JSON.stringify(e)
      },
    })
  }

  createLink() {
    let expiration = new Date()
    expiration.setDate(expiration.getDate() + 7)
    this.shareLinkService
      .createLinkForDocument(
        this._documentId,
        PaperlessShareLinkDocumentVersion.Archive,
        expiration
      )
      .subscribe({
        next: (result) => {
          console.log(result)
          this.copy(result)
          this.refresh()
        },
        error: (e) => {
          this.message = JSON.stringify(e)
        },
      })
  }
}
