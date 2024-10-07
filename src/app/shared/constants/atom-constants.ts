import {
    ButtonSize,
    ButtonState,
    ButtonType,
    InputSize,
    InputState,
    InputType,
    TextAreaSize,
    TextAreaState,
    TextSize,
	TextWeight,
	TitleLevel,
} from '@customTypes/atoms-enums';

export const EMPTY_STRING: string = '';
export const DISABLED_STATE: string = 'disabled';

// Buttons
export const BUTTON_DEFAULT_SIZE: ButtonSize = 'm';
export const BUTTON_DEFAULT_TYPE: ButtonType = 'main';
export const BUTTON_DEFAULT_STATE: ButtonState = 'active';
export const BUTTON_SIZE_PREFIX = 'btn-size-';
export const BUTTON_TYPE_PREFIX = 'btn-type-';
export const BUTTON_STATE_PREFIX = 'btn-state-';

// Inputs
export const INPUT_DEFAULT_SIZE: InputSize = 'm';
export const INPUT_DEFAULT_STATE: InputState = 'active';
export const INPUT_DEFAULT_TYPE: InputType = '';
export const INPUT_SIZE_PREFIX = 'input-size-';
export const INPUT_STATE_PREFIX = 'input-state-';
export const INPUT_LABEL_SIZE_PREFIX = 'label-size-';

// Inputs
export const TEXTAREA_DEFAULT_SIZE: TextAreaSize = 'm';
export const TEXTAREA_DEFAULT_STATE: TextAreaState = 'active';
export const TEXTAREA_SIZE_PREFIX = 'textarea-size-';
export const TEXTAREA_STATE_PREFIX = 'textarea-state-';
export const TEXTAREA_LABEL_SIZE_PREFIX = 'textarea-label-size-';

// Text
export const TEXT_DEFAULT_SIZE: TextSize = 'm';
export const TEXT_DEFAULT_WEIGHT: TextWeight = 'regular';
export const TEXT_SIZE_PREFIX = 'font-size-';
export const TEXT_WEIGHT_PREFIX = 'font-weight-';


// Title
export const TITLE_DEFAULT_LEVEL: TitleLevel = 'h1';