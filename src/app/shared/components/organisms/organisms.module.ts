import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionNameFormComponent } from './description-name-form/description-name-form.component';
import { AtomsModule } from '@atoms/atoms.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [DescriptionNameFormComponent],
    imports: [CommonModule, AtomsModule, ReactiveFormsModule],
	exports: [DescriptionNameFormComponent]
})
export class OrganismsModule {}
