import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
import {
    BUTTON_DEFAULT_SIZE,
    BUTTON_DEFAULT_STATE,
    BUTTON_DEFAULT_TYPE,
    BUTTON_SIZE_PREFIX,
    BUTTON_STATE_PREFIX,
    BUTTON_TYPE_PREFIX,
    EMPTY_STRING,
} from '@constants/atom-constants';
import { ButtonSize, ButtonState, ButtonType } from '@customTypes/atoms-types';

const STATE = 'state';

@Component({
    selector: 'button-atom',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit, OnChanges {
    styles = EMPTY_STRING;

    @Input() size: ButtonSize = BUTTON_DEFAULT_SIZE;
    @Input() type: ButtonType = BUTTON_DEFAULT_TYPE;
    @Input() state: ButtonState = BUTTON_DEFAULT_STATE;

    @Output() buttonClick = new EventEmitter<boolean>();

    constructor() {}
    ngOnChanges(changes: SimpleChanges): void {
        if (changes[STATE]) this.changeState(changes[STATE].currentValue);
    }

    ngOnInit(): void {
        this.styles = `${BUTTON_SIZE_PREFIX}${this.size} ${BUTTON_TYPE_PREFIX}${this.type} ${BUTTON_STATE_PREFIX}${this.state}`;
    }

    emitButtonClick() {
        this.buttonClick.emit();
    }

    changeState(state: ButtonState) {
        this.state = state;
        this.styles = `${BUTTON_SIZE_PREFIX}${this.size} ${BUTTON_TYPE_PREFIX}${this.type} ${BUTTON_STATE_PREFIX}${this.state}`;
    }
}
