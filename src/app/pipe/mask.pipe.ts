import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string): unknown {
    const val = value.substr(2, 10);
    const toBeReplaced = val.slice(0,-4)
    return val.replace(toBeReplaced, '**** ');
  }

}
