import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch: string): any {
    let result = ""
    let exist = false;
    let voyell = ['a', 'e', 'i', 'u', 'o', 'y']

    for (let j = 0; j < ch.length; j++) {
      for (let i = 0; i < voyell.length; i++) {
        if (voyell[i] == ch[j]) {
          exist = true
        }
      }
      if (exist) {
        result = result + '*'
        exist = false
      } else {
        result = result + ch[j]
      }
    }

    return result;
  }

  
}

