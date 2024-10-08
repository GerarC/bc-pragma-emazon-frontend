import { Component, Input, OnInit } from '@angular/core';
import { Column } from '@interfaces/atoms-interfaces';
import { Page } from '@interfaces/services/page';

@Component({
  selector: 'app-paginated-datatable',
  templateUrl: './paginated-datatable.component.html',
  styleUrls: ['./paginated-datatable.component.scss']
})
export class PaginatedDatatableComponent<T extends Record<string, any>> implements OnInit {
    @Input() columns?: Array<Column>;
    @Input() page?: Page<T>;
	rows: Array<T> = [];


  constructor() { }

  ngOnInit(): void {
	  if(this.page) this.rows = this.page.content;
  }

}
