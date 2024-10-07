import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EMPTY_STRING } from '@constants/atom-constants';
import {
    DESCRIPTION_NAME_FORM_ACTIVE_BUTTON_STATE,
    DESCRIPTION_NAME_FORM_DEFAULT_MODEL,
    DESCRIPTION_NAME_FORM_DISABLED_BUTTON_STATE,
} from '@constants/organism-constants';
import { ButtonState } from '@customTypes/atoms-enums';
import { DescriptionNameFormModel } from '@customTypes/organisms-enums';
import { DescriptionNameFormData } from '@interfaces/organisms-interfaces';

@Component({
    selector: 'description-name-form',
    templateUrl: './description-name-form.component.html',
    styleUrls: ['./description-name-form.component.scss'],
})
export class DescriptionNameFormComponent implements OnInit {
    data: FormGroup;
    buttonState: ButtonState = DESCRIPTION_NAME_FORM_DISABLED_BUTTON_STATE;

    @Input() model: DescriptionNameFormModel =
        DESCRIPTION_NAME_FORM_DEFAULT_MODEL;
    @Output() formSubmit = new EventEmitter<DescriptionNameFormData>();

    constructor(private formBuilder: FormBuilder) {
        this.data = this.formBuilder.group({
            name: new FormControl<string>(EMPTY_STRING),
            description: new FormControl<string>(EMPTY_STRING),
        });
    }

    ngOnInit(): void {}

    emitFormSubmit() {
        this.formSubmit.emit(this.data.value);
        this.data.reset();
    }

    onChange() {
        const obj = this.data.value;
        if (
            obj.name !== null &&
            obj.name !== EMPTY_STRING &&
            obj.description !== null &&
            obj.description !== EMPTY_STRING
        )
            this.buttonState = DESCRIPTION_NAME_FORM_ACTIVE_BUTTON_STATE;
        else this.buttonState = DESCRIPTION_NAME_FORM_DISABLED_BUTTON_STATE;
    }
}
