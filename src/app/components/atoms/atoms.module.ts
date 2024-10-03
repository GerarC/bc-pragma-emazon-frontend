import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TextComponent } from './text/text.component';

@NgModule({
    declarations: [ButtonComponent, TextComponent],
    imports: [CommonModule],
    exports: [ButtonComponent, TextComponent],
})
export class AtomsModule {}
