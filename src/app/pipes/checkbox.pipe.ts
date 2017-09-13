import { Pipe, PipeTransform } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import { LowerCasePipe } from '@angular/common';

@Pipe({
  name: 'checkbox'
})
export class CheckboxPipe implements PipeTransform {

  transform(items: any, args?: any): any {
    return null;
  }

}

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], term): any {
        console.log('term', term);
      
        return term 
            ? items.filter(item => item.company.search(new RegExp(term, 'i')) !== -1)
            : items;
    }
}

@Pipe({
    name: 'sortBy'
})

export class SortByPipe implements PipeTransform {
    transform(items: any[], sortedBy: string): any {
        console.log('sortedBy', sortedBy);
        
        return items.sort((a, b) => {return b[sortedBy] - a[sortedBy]});
    }
}
