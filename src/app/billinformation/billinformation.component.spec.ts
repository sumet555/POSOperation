import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillinformationComponent } from './billinformation.component';

describe('BillinformationComponent', () => {
  let component: BillinformationComponent;
  let fixture: ComponentFixture<BillinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
