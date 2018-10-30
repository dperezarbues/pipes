import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutes'
})
export class MinutesPipe implements PipeTransform {

  transform(value: number, filling?: boolean): any {
    let minutes:number = Math.floor(value/60);
    let seconds:number = value%60;
    return (filling)? `${this.padWithZeroes(minutes,2)}' ${this.padWithZeroes(seconds,2)}''` : `${minutes }' ${seconds}''`;
  }

  padWithZeroes (value:number, max: number):string {
    return ('0'.repeat(max) + value).substr(-max,max);
  }


}
