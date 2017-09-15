import { Pipe, PipeTransform } from '@angular/core';
import { JobsService } from '../services/jobs.service';

@Pipe({
  name: 'range'
})
export class CheckboxPipe implements PipeTransform {

  transform(value: any, teamList?: any): any {
    console.log('teamList',teamList);
    return (teamList || teamList == 0)
            ? value.filter(sal => { return sal.team })
            : value;
    }

}

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], term?:any): any {
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
