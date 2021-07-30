import { Injectable } from '@angular/core';
import { IService } from '../rest-interface.service';
import { environment } from 'src/environments/environment';
import { Course } from 'src/app/bases/course.base';

@Injectable()
export class CourseService extends IService<Course> {
  protected path: string = `${environment.decroly_api_url}/ecommerce/courses`;

  public get = (id?: string | number)  => this.http.get<Course[]>(`${this.path}/all${id ? '?id='+id : ''}`);
}
