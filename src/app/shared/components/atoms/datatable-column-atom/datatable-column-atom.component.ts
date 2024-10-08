import {
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { Column } from '@interfaces/atoms-interfaces';

@Component({
    selector: 'datatable-column-atom, [datatable-column-atom]',
    templateUrl: './datatable-column-atom.component.html',
    styleUrls: ['./datatable-column-atom.component.scss'],
})
export class DatatableColumnAtomComponent implements OnInit {
    @Input() column?: Column;

    constructor() {}

    ngOnInit(): void {
    }
}
