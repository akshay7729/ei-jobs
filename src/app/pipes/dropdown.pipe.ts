import { Pipe, PipeTransform } from '@angular/core';
import { JobsService } from '../services/jobs.service';

@Pipe({
  name: 'dropdown',
  pure: false
})
export class DropdownPipe implements PipeTransform {

  transform(opt: any[], sel?: any): any {
    return sel
            ? opt.filter(sal => { return sal.type == sel.joblists })
            : opt;
  }

}
