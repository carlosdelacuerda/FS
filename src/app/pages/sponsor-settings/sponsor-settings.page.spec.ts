import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorSettingsComponent } from './sponsor-settings.page';

describe('SponsorSettingsComponent', () => {
  let component: SponsorSettingsComponent;
  let fixture: ComponentFixture<SponsorSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SponsorSettingsComponent]
    });
    fixture = TestBed.createComponent(SponsorSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
