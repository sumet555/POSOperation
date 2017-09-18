import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAreaComponent } from './table-area.component';

describe('TableAreaComponent', () => {
  let component: TableAreaComponent;
  let fixture: ComponentFixture<TableAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
