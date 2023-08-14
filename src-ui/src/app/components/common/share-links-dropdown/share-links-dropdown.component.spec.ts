import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ShareLinksDropdownComponent } from './share-links-dropdown.component'
import { HttpClient } from '@angular/common/http'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('ShareLinksDialogComponent', () => {
  let component: ShareLinksDropdownComponent
  let fixture: ComponentFixture<ShareLinksDropdownComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareLinksDropdownComponent],
      imports: [HttpClientTestingModule],
    })
    fixture = TestBed.createComponent(ShareLinksDropdownComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
