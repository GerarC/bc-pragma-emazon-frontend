import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';
import {
  BUTTON_DEFAULT_SIZE,
  BUTTON_DEFAULT_TYPE,
  BUTTON_DEFAULT_STATE,
  BUTTON_SIZE_PREFIX,
  BUTTON_TYPE_PREFIX,
  BUTTON_STATE_PREFIX,
} from '@constants/atom-constants';
import { ButtonSize, ButtonState, ButtonType } from '@customTypes/atoms-enums';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize default values', () => {
    expect(component.size).toBe(BUTTON_DEFAULT_SIZE);
    expect(component.type).toBe(BUTTON_DEFAULT_TYPE);
    expect(component.state).toBe(BUTTON_DEFAULT_STATE);
    expect(component.styles).toBe(`${BUTTON_SIZE_PREFIX}${BUTTON_DEFAULT_SIZE} ${BUTTON_TYPE_PREFIX}${BUTTON_DEFAULT_TYPE} ${BUTTON_STATE_PREFIX}${BUTTON_DEFAULT_STATE}`);
  });

  it('should update styles on initialization', () => {
    component.size = 'm' as ButtonSize;
    component.type = 'primary' as ButtonType;
    component.state = 'active';
    component.ngOnInit();

    expect(component.styles).toBe(`${BUTTON_SIZE_PREFIX}m ${BUTTON_TYPE_PREFIX}primary ${BUTTON_STATE_PREFIX}active`);
  });

  it('should emit buttonClick event on click', () => {
    jest.spyOn(component.buttonClick, 'emit');
    const buttonElement = fixture.debugElement.query(By.css('button'));
    
    buttonElement.triggerEventHandler('click', null);

    expect(component.buttonClick.emit).toHaveBeenCalled();
  });

  it('should render button with correct styles', () => {
    component.size = 'm' as ButtonSize;
    component.type = 'main' as ButtonType;
    component.state = 'active';
    fixture.detectChanges(); // Trigger Angular change detection
    
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.className).toBe(`${BUTTON_SIZE_PREFIX}m ${BUTTON_STATE_PREFIX}active ${BUTTON_TYPE_PREFIX}main`);
  });

  it('should disable the button when state is "disabled"', () => {
    component.state = 'disabled' as ButtonState;
    fixture.detectChanges(); // Update the view with new state

    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.disabled).toBe(true); // Check that the button is disabled
  });

  it('should not disable the button when state is not "disabled"', () => {
    component.state = 'active' as ButtonState; // Set to an active state
    fixture.detectChanges(); // Update the view

    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.disabled).toBe(false); // Check that the button is enabled
  });

  it('should update the button styles when state changes', () => {
    component.size = 'm' as ButtonSize;
    component.type = 'primary' as ButtonType;
    component.state = 'active';
    component.ngOnInit(); // Initial styles setup

    component.changeState('disabled' as ButtonState); // Change the state to 'disabled'
    
    expect(component.styles).toBe(`${BUTTON_SIZE_PREFIX}${component.size} ${BUTTON_TYPE_PREFIX}${component.type} ${BUTTON_STATE_PREFIX}disabled`); // Check updated styles
  });
});
