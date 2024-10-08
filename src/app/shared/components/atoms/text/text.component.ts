import { Component, Input, OnInit } from '@angular/core';
import {
    EMPTY_STRING,
    TEXT_DEFAULT_SIZE,
    TEXT_DEFAULT_WEIGHT,
    TEXT_SIZE_PREFIX,
    TEXT_WEIGHT_PREFIX,
} from '@constants/atom-constants';
import { TextSize, TextWeight } from '@customTypes/atoms-types';

@Component({
    selector: 'text-atom',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
    styles = EMPTY_STRING;

    @Input() weight: TextWeight = TEXT_DEFAULT_WEIGHT;
    @Input() size: TextSize = TEXT_DEFAULT_SIZE;

    constructor() {}

    ngOnInit(): void {
        this.styles = `${TEXT_SIZE_PREFIX}${this.size} ${TEXT_WEIGHT_PREFIX}${this.weight}`;
    }
}
