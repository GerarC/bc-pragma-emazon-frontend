import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionNameFormComponent } from './description-name-form.component';

describe('DescriptionNameFormComponent', () => {
  let component: DescriptionNameFormComponent;
  let fixture: ComponentFixture<DescriptionNameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionNameFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionNameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
