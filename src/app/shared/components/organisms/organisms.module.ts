import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionNameFormComponent } from './description-name-form/description-name-form.component';
import { AtomsModule } from '@atoms/atoms.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginatedDatatableComponent } from './paginated-datatable/paginated-datatable.component';
import { MoleculesModule } from '@molecules/molecules.module';

@NgModule({
    declarations: [DescriptionNameFormComponent, PaginatedDatatableComponent],
    imports: [CommonModule, AtomsModule, MoleculesModule, ReactiveFormsModule],
    exports: [DescriptionNameFormComponent, PaginatedDatatableComponent],
})
export class OrganismsModule {}
