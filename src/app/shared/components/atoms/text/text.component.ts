import { Component, Input, OnInit } from '@angular/core';
import { EMPTY_STRING } from '@constants/atom-constants';

@Component({
    selector: 'text-atom',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
	
	styles = EMPTY_STRING;
	
	@Input() weight: string = 'regular';
	@Input() size: string = 'm';

    constructor() {}

    ngOnInit(): void {
		this.styles = `font-size-${this.size} font-weight-${this.weight}`
	}
}
