import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillinformationAreaComponent } from './billinformation-area.component';

describe('BillinformationAreaComponent', () => {
  let component: BillinformationAreaComponent;
  let fixture: ComponentFixture<BillinformationAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillinformationAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillinformationAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
