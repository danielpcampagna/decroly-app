import { flatten } from '@angular/compiler';
import { Component, OnInit, SimpleChanges, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, forkJoin, from, merge, Observable, of, Subscriber } from 'rxjs';
import { concatAll, filter, first, map, switchMap, take } from 'rxjs/operators';
import { Course } from 'src/app/bases/course.base';
import { Helpers } from 'src/app/helpers';
import { CourseService } from 'src/app/services/decroly/courses.services';

import { Banner } from '../../bases/banner.base';
import { Category, Tag } from '../../bases/category.base';
import { BannerService } from '../../services/decroly/banner.service';
import { CategoryService } from '../../services/decroly/category.service';
import { CourseCardComponent } from '../course-card/course-card.component';

export type CoursesByCategoryTag = {
  [categoryId: number]: {
    // [tagId: number]: Course[]
    [tagId: number]: number[]
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  school!: string;
  $banner!: Observable<Banner>;
  $categories!: Observable<Category[]>;

  a!: Observable<any>;

  $courses!: Observable<Course[]>;

  $coursesIdByCategoryTag!: Observable<CoursesByCategoryTag>;
  // $coursesByCategory!: Observable<{
  //   categoryId: number,
  //   $courses: Observable<Course>[],
  //   category: Category,
  // }[]>

  cardComponent!: Type<any>;

  constructor(
    private route: ActivatedRoute,
    private bannerService: BannerService,
    private categoryService: CategoryService,
    private courseService: CourseService,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.school = params?.school || "1";
      this.$banner = this.bannerService.get(this.school).pipe(first()) as Observable<Banner>
      this.$categories = this.categoryService.get(this.school);
      this.cardComponent = CourseCardComponent;
    });

    this.$courses = this.courseService.get('Mf6xsQw7XzbvpFGwx4Bl');

    this.$coursesIdByCategoryTag = this.$categories.pipe(
      map(categories =>
        Helpers.arrayToObject<number, { [tagId: number]: number[] }>(categories.map(category =>
          [ category.id , Helpers.arrayToObject<number, number[]>(category.category_tags
            .map(tag => [ tag.id, tag.category_tag_courses.map(c => c.courseId)])) ]
        ))
      )
    );
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes.person) {
  //     this.fullName = this.calculateFullName();
  //   }
  // }

  makeTagListTitle(categoryName: string, tagName: string) {
    return `${categoryName} ${tagName}`
  }

  // generateCoursesByCategoryTag(categoryId: number, tagId: number) {
  //   const _this = this;
  //   return new Observable(subscriber => {
  //     async function selectCourses() {
  //       const courseId = (course: Course) => {
  //         return course.edools.course;
  //       }

  //       const courses = await _this.$courses.toPromise();
  //       const categories = await _this.$categories.toPromise();

  //       const tagsByCategoryId = Helpers.flatArray(categories
  //         .filter(category => category.id === categoryId)
  //         .map(category => category.category_tags)
  //       );

  //       const coursesIdByCategoryIdTagId: number[] = [];
  //       for (let i = 0; i < tagsByCategoryId.length; i++) {
  //         const tag = tagsByCategoryId[i];
  //         if (tag.id === tagId) {
  //           // coursesIdByCategoryIdTagId.push(
  //           //   ...tag.category_tag_courses.map(course => course.courseId)
  //           // )
  //           const coursesIds = tag.category_tag_courses.map(course => course.courseId)
  //           console.log(coursesIds)
  //           subscriber.next(coursesIds)
  //         }
  //       }
  //       subscriber.complete()
  //       // return coursesIdByCategoryIdTagId;
  //       // return courses.filter(course => coursesIdByCategoryIdTagId.includes(courseId(course))).map(course => course.id)
  //     }

  //     selectCourses();
  //   })

    // return from(selectCourses())

  // }

  getCourseByCategoryTag(categoryId: number, tagId: number) {
    // return this.$coursesIdByCategoryTag.pipe(map(data => data[categoryId][tagId].map(i => String(i))))
    // return new Observable(sub => {
    //   sub.next(1)
    //   setTimeout(() => {
    //     sub.next(2)
    //     sub.complete()
    //   }, 1000)
    // })
    // return of([`${categoryId} | ${tagId} | no course | ${this.$coursesIdByCategoryTag}`])
  }


}
