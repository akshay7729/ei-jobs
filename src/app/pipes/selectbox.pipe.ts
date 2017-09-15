import { Pipe, PipeTransform } from '@angular/core';
import { JobsService } from '../services/jobs.service';

@Pipe({
  name: 'selectbox'
})
export class SelectboxPipe implements PipeTransform {

  transform(items: any, sel?: any): any {
        return sel ? items.filter(sal => sal.type === sel) : items;
    }

}
