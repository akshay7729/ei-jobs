import { Pipe, PipeTransform } from '@angular/core';
import { JobsService } from '../services/jobs.service';

@Pipe({
  name: 'checkcity'
})
export class CheckcityPipe implements PipeTransform {

  transform(check: any[], checked: any[]): any[] {
    console.log('checked',checked);
    return checked
            ? check.filter(city => city.name == checked) 
            : check;
  }

}
