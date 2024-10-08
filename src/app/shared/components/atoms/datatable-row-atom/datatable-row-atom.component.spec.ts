import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableRowAtomComponent } from './datatable-row-atom.component';

describe('DatatableRowAtomComponent', () => {
  let component: DatatableRowAtomComponent;
  let fixture: ComponentFixture<DatatableRowAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatableRowAtomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatatableRowAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
