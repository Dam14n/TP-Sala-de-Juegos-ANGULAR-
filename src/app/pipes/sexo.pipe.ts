import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo'
})
export class SexoPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    return value === 'M' ? 'machito' : 'señorita';
  }

}
