import { Injectable } from '@angular/core';
import { IService } from '../rest-interface.service';
import { environment } from 'src/environments/environment';
import { Category } from 'src/app/bases/category.base';

@Injectable()
export class CategoryService extends IService<Category> {
  protected path: string = `${environment.decroly_api_url}/categories`;
}
