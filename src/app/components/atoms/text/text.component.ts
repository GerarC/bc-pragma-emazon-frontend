import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'text-atom',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
	
	styles = '';
	
	@Input() weight: string = 'regular';
	@Input() size: string = 'm';

    constructor() {}

    ngOnInit(): void {
		this.styles = `font-size-${this.size} font-weight-${this.weight}`
	}
}
