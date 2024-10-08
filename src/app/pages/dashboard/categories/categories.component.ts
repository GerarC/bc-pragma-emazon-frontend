import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@services/category/category.service';
import { CategoryRequest, CategoryResponse } from '@interfaces/models/category';
import { DescriptionNameFormData } from '@interfaces/organisms-interfaces';
import { Column } from '@interfaces/atoms-interfaces';
import { categoryColumns } from './categories-constants';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
    columns: Array<Column> = categoryColumns;
    rows: Array<CategoryResponse> = [];

    constructor(private categoryService: CategoryService) {}

    ngOnInit(): void {
        this.categoryService.getCategories({}).subscribe((observer) => {
			this.rows = observer.content;
        });
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
