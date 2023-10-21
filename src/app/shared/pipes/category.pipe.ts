import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'front-and': return 'code';
      case 'back-and': return 'computer';
    }
    return 'code';
  }

}
