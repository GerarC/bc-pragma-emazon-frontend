import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DescriptionNameFormComponent } from './description-name-form.component';
import { AtomsModule } from '@atoms/atoms.module';

describe('DescriptionNameFormComponent', () => {
  let component: DescriptionNameFormComponent;
  let fixture: ComponentFixture<DescriptionNameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionNameFormComponent ],
      imports: [ ReactiveFormsModule, AtomsModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(DescriptionNameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the form component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with default values', () => {
    const formValue = component.data.value;
    expect(formValue.name).toBe('');
    expect(formValue.description).toBe('');
    expect(component.buttonState).toBe('disabled');
  });

  it('should activate the button when form fields are filled', () => {
    const nameControl = component.data.get('name');
    const descriptionControl = component.data.get('description');

    nameControl?.setValue('Sample Name');
    descriptionControl?.setValue('Sample Description');

    component.onChange();
    fixture.detectChanges();

    expect(component.buttonState).toBe('active');
  });

  it('should disable the button when form fields are empty', () => {
    const nameControl = component.data.get('name');
    const descriptionControl = component.data.get('description');

    nameControl?.setValue('');
    descriptionControl?.setValue('');

    component.onChange();
    fixture.detectChanges();

    expect(component.buttonState).toBe('disabled');
  });

  it('should emit the formSubmit event with correct data when the form is submitted', () => {
    const formSubmitSpy = jest.spyOn(component.formSubmit, 'emit');
    const nameControl = component.data.get('name');
    const descriptionControl = component.data.get('description');

    nameControl?.setValue('Sample Name');
    descriptionControl?.setValue('Sample Description');

    component.emitFormSubmit();
    fixture.detectChanges();

    expect(formSubmitSpy).toHaveBeenCalledWith({
      name: 'Sample Name',
      description: 'Sample Description',
    });
  });

  it('should reset the form after submission', () => {
    const nameControl = component.data.get('name');
    const descriptionControl = component.data.get('description');

    nameControl?.setValue('Sample Name');
    descriptionControl?.setValue('Sample Description');

    component.emitFormSubmit();
    fixture.detectChanges();

    expect(nameControl?.value).toBe(null);
    expect(descriptionControl?.value).toBe(null);
    expect(component.buttonState).toBe('active');
  });
});
