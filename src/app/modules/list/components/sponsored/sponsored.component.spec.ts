import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoredComponent } from './sponsored.component';

describe('SponsoredComponent', () => {
  let component: SponsoredComponent;
  let fixture: ComponentFixture<SponsoredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SponsoredComponent]
    });
    fixture = TestBed.createComponent(SponsoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
