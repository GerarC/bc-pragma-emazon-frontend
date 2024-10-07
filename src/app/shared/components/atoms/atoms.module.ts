import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TextComponent } from './text/text.component';
import { InputAtomComponent } from './input-atom/input-atom.component';
import { TitleAtomComponent } from './title-atom/title-atom.component';
import { FormsModule } from '@angular/forms';
import { TextareaAtomComponent } from './textarea-atom/textarea-atom.component';

@NgModule({
    declarations: [ButtonComponent, TextComponent, InputAtomComponent, TitleAtomComponent, TextareaAtomComponent],
    imports: [CommonModule, FormsModule],
    exports: [ButtonComponent, TextComponent, InputAtomComponent, TitleAtomComponent, TextareaAtomComponent],
})
export class AtomsModule {}
