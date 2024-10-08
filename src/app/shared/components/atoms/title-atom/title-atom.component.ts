import {
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { EMPTY_STRING, TITLE_DEFAULT_LEVEL } from '@constants/atom-constants';
import { TitleLevel } from '@customTypes/atoms-types';

@Component({
    selector: 'title-atom',
    templateUrl: './title-atom.component.html',
    styleUrls: ['./title-atom.component.scss'],
})
export class TitleAtomComponent implements OnInit {
    @Input() level: TitleLevel = TITLE_DEFAULT_LEVEL;
	@Input() content: string = EMPTY_STRING;

    constructor() {}

	ngOnInit(): void {
	}
}
