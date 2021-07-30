import { Pipe, PipeTransform } from '@angular/core';

type Props = { [key: string]: any }

@Pipe({
  name: 'objGet'
})
export class ObjGet implements PipeTransform {
  transform(object?: Props | null, key?: string | number ): any {
    if (object && key && key in object) return object[key];
    return null;
  }
}
//
