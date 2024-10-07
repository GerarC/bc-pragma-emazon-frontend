import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel binding
import { TextareaAtomComponent } from './textarea-atom.component';
import { TextAreaSize, TextAreaState } from '@customTypes/atoms-enums';
import { EMPTY_STRING } from '@constants/atom-constants';

describe('TextareaAtomComponent', () => {
  let component: TextareaAtomComponent;
  let fixture: ComponentFixture<TextareaAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule], // Include FormsModule to handle ngModel
      declarations: [TextareaAtomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextareaAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default styles', () => {
    expect(component.styles).toBe('textarea-size-m textarea-state-active');
  });

  it('should apply correct styles based on inputs', () => {
    // Set input properties
    component.size = 'm'; // Assume TextAreaSize.LARGE is defined in your enums
    component.state = 'active'; // Assume TextAreaState.ACTIVE is defined in your enums

    component.ngOnInit(); // Call ngOnInit to apply styles

    // Check if styles are set correctly
    expect(component.styles).toBe('textarea-size-m textarea-state-active'); // Adjust based on your prefix definitions
  });

  it('should call onChange when input changes', () => {
    const onChangeSpy = jest.spyOn(component, 'onInputChange').mockImplementation(); // Spy on the onInputChange method
    const inputElement: HTMLTextAreaElement = fixture.nativeElement.querySelector('textarea');

    // Set the value of the textarea
    inputElement.value = 'New Value';
    inputElement.dispatchEvent(new Event('input')); // Dispatch the input event

    // Verify that onInputChange was called
    expect(onChangeSpy).toHaveBeenCalled();
  });
});
