import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch:string): any {
   let  content="";
    for (let i = 0; i < ch.length; i++) {
      content = ch[i] + content;
    }
    return content;
  }

}
