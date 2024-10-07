import { Injectable } from '@angular/core';
import { CATEGORY_BASE_ENDPOINT } from '@constants/services-constants';
import { CategoryRequest } from '@interfaces/models/category';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    private categoryAPIUrl = environment.stockApiUrl + CATEGORY_BASE_ENDPOINT;

    constructor(private httpClient: HttpClient) {}
	
	saveCategory(category: CategoryRequest): Observable<void>{
		return this.httpClient.post<void>(`${this.categoryAPIUrl}`, category)
	}
}
