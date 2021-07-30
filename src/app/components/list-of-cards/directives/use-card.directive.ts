import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[useCard]',
})
export class UseCardDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
