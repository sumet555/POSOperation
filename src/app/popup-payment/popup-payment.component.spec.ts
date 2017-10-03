import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPaymentComponent } from './popup-payment.component';

describe('PopupPaymentComponent', () => {
  let component: PopupPaymentComponent;
  let fixture: ComponentFixture<PopupPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
