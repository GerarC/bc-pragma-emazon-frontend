import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryService } from '@services/category/category.service';
import { CategoryRequest, CategoryResponse } from '@interfaces/models/category';
import { DescriptionNameFormData } from '@interfaces/organisms-interfaces';
import { Column } from '@interfaces/atoms-interfaces';
import { categoryColumns } from './categories-constants';
import { Page } from '@interfaces/services/page';
import { Subject, Observable } from 'rxjs';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, OnDestroy {
	private destroyed = new Subject();
    columns: Array<Column> = categoryColumns;
    page?: Page<CategoryResponse>;
	isDataLoaded: boolean = false;

    constructor(private categoryService: CategoryService) {}

    ngOnInit(): void {
        const observable = this.categoryService.getCategories({}).subscribe((data) => {
			this.page = data
			this.isDataLoaded = true;
        });
    }

	ngOnDestroy(): void {
        this.destroyed.complete(); 
	}

    onSubmit(data: DescriptionNameFormData) {
        const category: CategoryRequest = {
            name: data.name ? data.name : '',
            description: data.description ? data.description : '',
        };
        this.categoryService
            .saveCategory(category)
            .subscribe((observer) => console.log(observer));
    }
}
