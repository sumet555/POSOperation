import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupTableComponent } from './popup-table.component';

describe('PopupTableComponent', () => {
  let component: PopupTableComponent;
  let fixture: ComponentFixture<PopupTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
