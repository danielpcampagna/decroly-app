import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/bases/course.base';
import { ICardComponent } from 'src/app/components/list-of-cards/components/card.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements  OnInit {
  @Input() props!: Course;
  // @Input() props!: number[];

  constructor() {  }

  ngOnInit(): void { }

}
