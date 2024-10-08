import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Column } from '@interfaces/atoms-interfaces';

@Component({
    selector: '[datatable-row-atom]',
    templateUrl: './datatable-row-atom.component.html',
    styleUrls: ['./datatable-row-atom.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DatatableRowAtomComponent<T extends Record<string, any>>
    implements OnInit
{
    @Input() row: T = {} as T;
    @Input() columns?: Array<Column>;

    constructor() {}

    ngOnInit(): void {}
}
