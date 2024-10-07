import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CategoryService } from './category.service';
import { HttpHeaders } from '@angular/common/http';
import { CategoryRequest } from '@interfaces/models/category';
import { CATEGORY_BASE_ENDPOINT } from '@constants/services-constants';
import { environment } from 'src/environments/environment';

describe('CategoryService', () => {
  let service: CategoryService;
  let httpMock: HttpTestingController;
  const categoryAPIUrl = environment.stockApiUrl + CATEGORY_BASE_ENDPOINT;
  const headers = new HttpHeaders({
    Authorization: environment.tokens.admin,
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoryService],
    });
    service = TestBed.inject(CategoryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call saveCategory and return void', () => {
    const categoryRequest: CategoryRequest = {
      name: 'Electronics',
      description: 'Devices and gadgets'
    };

    service.saveCategory(categoryRequest).subscribe(response => {
      expect(response).toBeUndefined(); 
    });

    const req = httpMock.expectOne(categoryAPIUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(categoryRequest);

    req.flush(null); 
  });
});
