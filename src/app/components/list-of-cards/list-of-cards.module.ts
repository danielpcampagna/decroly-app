import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CardComponent } from './components/card.component';
import { UseCardDirective } from './directives/use-card.directive';
import { ListOfCardsComponent } from './list-of-cards.component';


@NgModule({
  imports: [
    BrowserModule,
    IvyCarouselModule,
  ],
  declarations: [
    ListOfCardsComponent,
    CardComponent,
    UseCardDirective,
  ],
  exports: [
    ListOfCardsComponent,
    CardComponent,
    UseCardDirective,
    IvyCarouselModule,
  ]
})
export class ListOfCardsModule { }
