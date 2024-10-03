import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TextComponent } from './text/text.component';
import { InputAtomComponent } from './input-atom/input-atom.component';

@NgModule({
    declarations: [ButtonComponent, TextComponent, InputAtomComponent],
    imports: [CommonModule],
    exports: [ButtonComponent, TextComponent, InputAtomComponent],
})
export class AtomsModule {}
