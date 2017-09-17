import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(teamVal: any, teamFil?: any): any {
  		console.log('teamFil', teamFil);
  		return teamFil
  		 ? teamVal.filter(person => person.team >= teamFil) 
  		 : teamVal;
	}

}

// min salary range slider

@Pipe({
  name: 'minSalary'
})
export class minSalaryPipe implements PipeTransform {

  transform(minVal: any, minFil?: any): any {
  		console.log('minFil', minFil);
  		return minFil
  		 ? minVal.filter(person => person.min_salary >= minFil) 
  		 : minVal;
	}

}

// max salary range slider

@Pipe({
  name: 'maxSalary'
})
export class maxSalaryPipe implements PipeTransform {

  transform(maxVal: any, maxFil?: any): any {
  		console.log('maxFil', maxFil);
  		return maxFil
  		 ? maxVal.filter(person => person.max_salary <= maxFil) 
  		 : maxVal;
	}

}


