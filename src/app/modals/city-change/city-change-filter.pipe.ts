import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cityChangeFilter'
})
export class CityChangeFilterPipe implements PipeTransform {

  transform(value: any[], args: string): any[] {
    return value.filter(item => {
      return item.name.toLowerCase().includes(args.toLowerCase())
    })
  }

}
