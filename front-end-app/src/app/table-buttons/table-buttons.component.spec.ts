import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableButtonsComponent } from './table-buttons.component';

describe('TableButtonsComponent', () => {
  let component: TableButtonsComponent;
  let fixture: ComponentFixture<TableButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
