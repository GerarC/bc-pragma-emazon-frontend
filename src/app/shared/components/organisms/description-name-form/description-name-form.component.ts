import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EMPTY_STRING } from '@constants/atom-constants';
import { DESCRIPTION_NAME_FORM_DEFAULT_MODEL } from '@constants/organism-constants';
import { DescriptionNameFormModel } from '@customTypes/organisms-enums';
import { DescriptionNameFormData } from '@interfaces/organisms-interfaces';

@Component({
    selector: 'description-name-form',
    templateUrl: './description-name-form.component.html',
    styleUrls: ['./description-name-form.component.scss'],
})
export class DescriptionNameFormComponent implements OnInit {
    data: FormGroup;
    @Input() model: DescriptionNameFormModel = DESCRIPTION_NAME_FORM_DEFAULT_MODEL;
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
}
