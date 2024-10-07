import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DISABLED_STATE, EMPTY_STRING, TEXTAREA_DEFAULT_SIZE, TEXTAREA_DEFAULT_STATE, TEXTAREA_LABEL_SIZE_PREFIX, TEXTAREA_SIZE_PREFIX, TEXTAREA_STATE_PREFIX } from '@constants/atom-constants';
import { TextAreaSize, TextAreaState } from '@customTypes/atoms-enums';

@Component({
    selector: 'textarea-atom',
    templateUrl: './textarea-atom.component.html',
    styleUrls: ['./textarea-atom.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TextareaAtomComponent),
            multi: true,
        },
    ],
})
export class TextareaAtomComponent implements OnInit, ControlValueAccessor{
    styles: string = EMPTY_STRING;
    disabled: string | null = null;
    labelStyles: string = EMPTY_STRING;

    @Input() size: TextAreaSize = TEXTAREA_DEFAULT_SIZE;
    @Input() state: TextAreaState = TEXTAREA_DEFAULT_STATE;
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
        this.styles = `${TEXTAREA_SIZE_PREFIX}${this.size} ${TEXTAREA_STATE_PREFIX}${this.state}`;
        if (this.state === DISABLED_STATE) this.disabled = this.state;
        if (this.label !== EMPTY_STRING)
            this.labelStyles = `${TEXTAREA_LABEL_SIZE_PREFIX}${this.size}`;
    }

    onInputChange(event: Event): void {
        this.onChange(this.value);
    }

    onInputBlur(): void {
        this.onTouched();
    }
}
