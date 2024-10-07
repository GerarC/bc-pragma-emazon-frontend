import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { InputAtomComponent } from './input-atom.component';

describe('InputAtomComponent', () => {
  let component: InputAtomComponent;
  let fixture: ComponentFixture<InputAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [InputAtomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.size).toBe('m');
    expect(component.state).toBe('active'); 
    expect(component.type).toBe('');
    expect(component.placeholder).toBe('');
    expect(component.label).toBe('');
    expect(component.name).toBe('');
  });

  it('should bind the value correctly', () => {
    const testValue = 'Test Value';
    component.writeValue(testValue);
    expect(component.value).toBe(testValue);
  });

  it('should call onInputChange when input changes', () => {
    const onInputChangeSpy = jest.spyOn(component, 'onInputChange');
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');

    component.value = 'Initial Value';
    inputElement.value = 'New Value';
    inputElement.dispatchEvent(new Event('input'));

    expect(onInputChangeSpy).toHaveBeenCalledWith('New Value'); 
  });

  it('should display the label when provided', () => {
    component.label = 'Test Label';
    fixture.detectChanges(); // Update the view

    const labelElement: HTMLLabelElement = fixture.nativeElement.querySelector('label');
    expect(labelElement).toBeTruthy();
    expect(labelElement.textContent).toBe('Test Label');
  });

  it('should not display the label when not provided', () => {
    const labelElement: HTMLLabelElement = fixture.nativeElement.querySelector('label');
    expect(labelElement).toBeNull(); // Should not be present
  });
});