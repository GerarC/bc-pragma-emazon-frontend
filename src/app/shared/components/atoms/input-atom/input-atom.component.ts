import { Component, Input, OnInit } from '@angular/core';
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
import { InputSize, InputState, InputType } from '@customTypes/enums';

@Component({
    selector: 'input-atom',
    templateUrl: './input-atom.component.html',
    styleUrls: ['./input-atom.component.scss'],
})
export class InputAtomComponent implements OnInit {
    styles: string = EMPTY_STRING;
    disabled: string = EMPTY_STRING;
    labelStyles: string = EMPTY_STRING;

    @Input() size: InputSize = INPUT_DEFAULT_SIZE;
    @Input() state: InputState = INPUT_DEFAULT_STATE;
    @Input() type: InputType = INPUT_DEFAULT_TYPE;
    @Input() placeholder: string = EMPTY_STRING;
    @Input() label: string = EMPTY_STRING;

    constructor() {}

    ngOnInit(): void {
        this.styles = `${INPUT_SIZE_PREFIX}${this.size} ${INPUT_STATE_PREFIX}${this.state}`;
        if (this.state === DISABLED_STATE) this.disabled = this.state;
        if (this.label !== EMPTY_STRING)
            this.labelStyles = `${INPUT_LABEL_SIZE_PREFIX}${this.size}`;
    }
}
