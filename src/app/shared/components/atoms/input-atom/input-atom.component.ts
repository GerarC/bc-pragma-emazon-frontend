import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
    AbstractControl,
    ControlContainer,
    ControlValueAccessor,
    FormControl,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
    DISABLED_STATE,
    EMPTY_STRING,
    INPUT_DEFAULT_SIZE,
    INPUT_DEFAULT_STATE,
    INPUT_DEFAULT_TYPE,
    INPUT_LABEL_SIZE_PREFIX,
    INPUT_SIZE_PREFIX,
    INPUT_STATE_PREFIX,
} from '@constants/atom-constants';
import { InputSize, InputState, InputType } from '@customTypes/atoms-types';

@Component({
    selector: 'input-atom',
    templateUrl: './input-atom.component.html',
    styleUrls: ['./input-atom.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputAtomComponent),
            multi: true,
        },
    ],
})
export class InputAtomComponent implements OnInit, ControlValueAccessor {
    styles: string = EMPTY_STRING;
    disabled: string | null = null;
    labelStyles: string = EMPTY_STRING;

    @Input() size: InputSize = INPUT_DEFAULT_SIZE;
    @Input() state: InputState = INPUT_DEFAULT_STATE;
    @Input() type: InputType = INPUT_DEFAULT_TYPE;
    @Input() placeholder: string = EMPTY_STRING;
    @Input() label: string = EMPTY_STRING;
    @Input() name: string = EMPTY_STRING;

    value: string = EMPTY_STRING;

    private onChange: (value: any) => void = () => {};
    private onTouched: () => void = () => {};

    constructor() {}

    writeValue(value: string): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    ngOnInit(): void {
        this.styles = `${INPUT_SIZE_PREFIX}${this.size} ${INPUT_STATE_PREFIX}${this.state}`;
        if (this.state === DISABLED_STATE) this.disabled = this.state;
        if (this.label !== EMPTY_STRING)
            this.labelStyles = `${INPUT_LABEL_SIZE_PREFIX}${this.size}`;
    }

    onInputChange(event: Event): void {
        this.onChange(this.value);
    }

    onInputBlur(): void {
        this.onTouched();
    }
}
