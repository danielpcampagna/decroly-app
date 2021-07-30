import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/bases/course.base';
import { CoursesByCategoryTag } from '../home/home.component';
@Pipe({
  name: 'getCourse'
})
export class GetCourseByCategoryTag implements PipeTransform {
  transform(coursesByCategoryTag: CoursesByCategoryTag | null, categoryId: number, tagId: number, courses: Course[] | null): any {
    if (!coursesByCategoryTag || !courses) return null;
    return courses.filter(course => coursesByCategoryTag[categoryId][tagId].includes(course.edools.course))
  }
}
//
