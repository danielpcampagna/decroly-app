import { Injectable } from "@angular/core";

@Injectable()
export class Helpers {
  public static flatArray<T>(array: T[][]): T[] {
    return array.reduce((accumulator, value) => accumulator.concat(value), []);
  }

  public static arrayToObject<T extends string | number, U>(array: [T, U][]): { [key: string]: U } | { [key: number]: U } {
    return Object.fromEntries(new Map(array));
  }
}
