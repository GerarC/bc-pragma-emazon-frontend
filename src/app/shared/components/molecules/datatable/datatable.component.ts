import { Component, Input, OnInit } from '@angular/core';
import { Column } from '@interfaces/atoms-interfaces';

@Component({
    selector: 'datatable',
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent<T extends Record<string, any>> implements OnInit {
    @Input() columns?: Array<Column>;
    @Input() rows?: Array<T>;
	
    constructor() {
    }

    ngOnInit(): void {}
}
