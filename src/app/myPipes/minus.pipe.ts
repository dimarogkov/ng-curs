import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minus'
})
export class MinusPipe implements PipeTransform {

  transform(num: number, secondNum:number = 1): number {
    return num - secondNum;
  }

}
