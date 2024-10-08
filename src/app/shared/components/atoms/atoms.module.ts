import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TextComponent } from './text/text.component';
import { InputAtomComponent } from './input-atom/input-atom.component';
import { TitleAtomComponent } from './title-atom/title-atom.component';
import { FormsModule } from '@angular/forms';
import { TextareaAtomComponent } from './textarea-atom/textarea-atom.component';
import { DatatableRowAtomComponent } from './datatable-row-atom/datatable-row-atom.component';
import { DatatableColumnAtomComponent } from './datatable-column-atom/datatable-column-atom.component';
import { PagepickerAtomComponent } from './pagepicker-atom/pagepicker-atom.component';

@NgModule({
    declarations: [
        ButtonComponent,
        TextComponent,
        InputAtomComponent,
        TitleAtomComponent,
        TextareaAtomComponent,
        DatatableRowAtomComponent,
        DatatableColumnAtomComponent,
        PagepickerAtomComponent,
    ],
    imports: [CommonModule, FormsModule],
    exports: [
        ButtonComponent,
        TextComponent,
        InputAtomComponent,
        TitleAtomComponent,
        TextareaAtomComponent,
        DatatableRowAtomComponent,
        DatatableColumnAtomComponent,
        PagepickerAtomComponent,
    ],
})
export class AtomsModule {}
