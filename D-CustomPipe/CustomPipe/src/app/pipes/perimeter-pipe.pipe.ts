import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'perimeterPipe'
})
export class PerimeterPipePipe implements PipeTransform {

  transform(value: number) {
    return 2*Math.PI*value;
  }

}
