import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableColumnAtomComponent } from './datatable-column-atom.component';

describe('DatatableColumnAtomComponent', () => {
  let component: DatatableColumnAtomComponent;
  let fixture: ComponentFixture<DatatableColumnAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatableColumnAtomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatatableColumnAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
