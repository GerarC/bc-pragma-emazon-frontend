import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@services/category/category.service';
import { CategoryRequest } from '@interfaces/models/category';
import { DescriptionNameFormData } from '@interfaces/organisms-interfaces';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
    constructor(private categoryService: CategoryService) {}

    ngOnInit(): void {}

    onSubmit(data: DescriptionNameFormData) {
        console.log(data);
        const category: CategoryRequest = {
            name: data.name ? data.name : '',
            description: data.description ? data.description : '',
        };
        this.categoryService.saveCategory(category).subscribe(observer => console.log(observer))
    }
}
