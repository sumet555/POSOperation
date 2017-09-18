import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletAreaComponent } from './outlet-area.component';

describe('OutletAreaComponent', () => {
  let component: OutletAreaComponent;
  let fixture: ComponentFixture<OutletAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
