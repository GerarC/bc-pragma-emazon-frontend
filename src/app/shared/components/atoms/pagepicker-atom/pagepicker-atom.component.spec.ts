import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagepickerAtomComponent } from './pagepicker-atom.component';

describe('PagepickerAtomComponent', () => {
  let component: PagepickerAtomComponent;
  let fixture: ComponentFixture<PagepickerAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagepickerAtomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagepickerAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
