import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date): string {
    const today = new Date();
    const birth = new Date(value);
    let age = today.getUTCFullYear() - birth.getUTCFullYear();
    if (
      (birth.getUTCMonth() > today.getUTCMonth()) ||
      ((birth.getUTCMonth() === today.getUTCMonth()) &&
      (birth.getUTCDate() > today.getUTCDate()))
      ) {
      age--
      };
    return `${age} years old`;
  }

}
