import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges, Type, ViewEncapsulation } from '@angular/core';
import { Category } from 'src/app/bases/category.base';
import { CardComponent, ICardComponent } from './components/card.component';

@Component({
  selector: 'app-list-of-cards',
  templateUrl: './list-of-cards.component.html',
  styleUrls: ['./list-of-cards.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListOfCardsComponent implements OnChanges {

  static DEFAULT_STYLES: any = {
    list: {
      justifyContent: 'flex-start',
    },
    item: {
      height: 300
    }
  }

  @Input() cardsProps: any[] = [];
  @Input() title!: string;
  @Input() cardComponent!: Type<ICardComponent<any>>;

  @Input() styles: any = {}

  shouldUseCarousel: boolean = false;

  private innerWidth: number = window.innerWidth;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.styles = { ...ListOfCardsComponent.DEFAULT_STYLES, ...this.styles };

    if ('cardsProps' in changes && this.cardsProps)
      this.updateUsingCarousel();
      this.updateStyles();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.updateUsingCarousel();
    this.updateStyles();
  }

  private updateUsingCarousel() {
    if (!this.cardsProps) return;

    const width = this.innerWidth;
    const cardsLength = this.cardsProps.length;

    if (width < 576) return this.shouldUseCarousel = cardsLength > 1;
    if (width < 768) return this.shouldUseCarousel = cardsLength > 2;
    if (width < 992) return this.shouldUseCarousel = cardsLength > 3;
    return this.shouldUseCarousel = cardsLength > 4;
  }

  private updateStyles() {
    if (!this.cardsProps) return;

    const width = this.innerWidth;
    const cardsLength = this.cardsProps.length;

    if (width < 768)
      this.styles.list.justifyContent = cardsLength > 2 ? 'space-between' : 'flex-start';
    else if (width < 992)
      this.styles.list.justifyContent = cardsLength > 3 ? 'space-between' : 'flex-start';
    else
      this.styles.list.justifyContent = cardsLength >= 4 ? 'space-between' : 'flex-start';
  }

  // private update
}
