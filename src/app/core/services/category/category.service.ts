import { Injectable } from '@angular/core';
import { CATEGORY_BASE_ENDPOINT } from '@constants/services-constants';
import { CategoryRequest, CategoryResponse } from '@interfaces/models/category';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PageQuery } from '@interfaces/services/queries';
import { BuildUrl } from './build-url';
import { Page } from '@interfaces/services/page';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    private categoryAPIUrl = environment.stockApiUrl + CATEGORY_BASE_ENDPOINT;

    headers = new HttpHeaders({
        Authorization: environment.tokens.admin,
    });

    constructor(private httpClient: HttpClient) {}

    saveCategory(category: CategoryRequest): Observable<void> {
        return this.httpClient.post<void>(`${this.categoryAPIUrl}`, category, {
            headers: this.headers,
        });
    }

    getCategories(query: PageQuery): Observable<Page<CategoryResponse>> {
        let params = BuildUrl.buildParams(query);
        return this.httpClient.get<Page<CategoryResponse>>(
            `${this.categoryAPIUrl}`,
            {
                headers: this.headers,
                params
            }
        );
    }
}
