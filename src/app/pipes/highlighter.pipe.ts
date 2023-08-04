import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighter',
})
export class HighlighterPipe implements PipeTransform {
  transform(value: string, query: string): any {
    if (!query) return value;
    let keywords = query.split(' ');
    keywords.forEach((key) => {
      const re = new RegExp(key, 'igm');
      value = value.replace(re, '<mark>$&</mark>');
    });

    return value;
  }
}
