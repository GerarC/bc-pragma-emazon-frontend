import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedDatatableComponent } from './paginated-datatable.component';

describe('PaginatedDatatableComponent', () => {
  let component: PaginatedDatatableComponent;
  let fixture: ComponentFixture<PaginatedDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatedDatatableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatedDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
