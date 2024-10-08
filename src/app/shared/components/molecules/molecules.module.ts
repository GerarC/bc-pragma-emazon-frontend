import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { AtomsModule } from '@atoms/atoms.module';
import { PaginationBarComponent } from './pagination-bar/pagination-bar.component';



@NgModule({
  declarations: [
    DatatableComponent,
    PaginationBarComponent
  ],
  imports: [
    CommonModule,
	AtomsModule
  ],
  exports: [
	DatatableComponent,
    PaginationBarComponent
  ]
})
export class MoleculesModule { }
