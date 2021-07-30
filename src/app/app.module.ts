import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './features/banner/banner.component';
import { HomeComponent } from './features/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { BannerService } from './services/decroly/banner.service';
import { HeaderComponent } from './components/header/header.component';
import { CategoryService } from './services/decroly/category.service';
import { ListOfCardsModule } from './components/list-of-cards/list-of-cards.module';
import { CourseCardComponent } from './features/course-card/course-card.component';
import { CourseService } from './services/decroly/courses.services';
import { Helpers } from './helpers';
import { TypeOfPipe } from './pipes/typeof.pipe';
import { ObjGet } from './pipes/obj-get.pipe';
import { GetCourseByCategoryTag } from './features/pipes/get-course-by-category-tag.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomeComponent,
    HeaderComponent,
    CourseCardComponent,
    TypeOfPipe,
    ObjGet,
    GetCourseByCategoryTag,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ListOfCardsModule,
  ],
  providers: [
    BannerService,
    CategoryService,
    CourseService,
    Helpers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
