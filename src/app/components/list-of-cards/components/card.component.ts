import { Component, ComponentFactoryResolver, ElementRef, Input, Type, ViewChild } from "@angular/core";
import { UseCardDirective } from "../directives/use-card.directive";

export interface ICardComponent<T> {
  props?: T | null;
}

@Component({
  selector: 'app-template-card',
  template: '<ng-template useCard></ng-template>'
})
export class CardComponent<T> implements ICardComponent<T> {
  @Input() props!: T;

  @ViewChild(UseCardDirective, { static: true })
  private useCard!: UseCardDirective;

  @Input() cardComponent!: Type<ICardComponent<T>>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    if (this.useCard) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.cardComponent);

      const viewContainerRef = this.useCard.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent<ICardComponent<T>>(componentFactory);
      componentRef.instance.props = this.props;
    }
  }
}
