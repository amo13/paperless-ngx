import { TestBed } from '@angular/core/testing'

import { ShareLinkService } from './share-link.service'
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { Subscription } from 'rxjs'
import { commonAbstractPaperlessServiceTests } from './abstract-paperless-service.spec'

let httpTestingController: HttpTestingController
let service: ShareLinkService
let subscription: Subscription
const endpoint = 'share_links'

// run common tests
commonAbstractPaperlessServiceTests(endpoint, ShareLinkService)

describe(`Additional service tests for ShareLinkService`, () => {
  // it('should support patchMany', () => {
  //   subscription = service.patchMany(mail_rules).subscribe()
  //   mail_rules.forEach((mail_rule) => {
  //     const reqs = httpTestingController.match(
  //       `${environment.apiBaseUrl}${endpoint}/${mail_rule.id}/`
  //     )
  //     expect(reqs).toHaveLength(1)
  //     expect(reqs[0].request.method).toEqual('PATCH')
  //   })
})

// describe('ShareLinkService', () => {
//   let service: ShareLinkService

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [ShareLinkService],
//       imports: [HttpClientTestingModule],
//     })

//     httpTestingController = TestBed.inject(HttpTestingController)
//     service = TestBed.inject(ShareLinkService)
//   })

//   afterEach(() => {
//     subscription?.unsubscribe()
//     httpTestingController.verify()
//   })
// })
