import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitbillComponent } from './splitbill.component';

describe('SplitbillComponent', () => {
  let component: SplitbillComponent;
  let fixture: ComponentFixture<SplitbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
