import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppResultsComponent } from './app-results.component';

describe('AppResultsComponent', () => {
  let component: AppResultsComponent;
  let fixture: ComponentFixture<AppResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
