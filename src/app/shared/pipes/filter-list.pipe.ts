import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {
  transform<T>(list: T[] | null, fieldName: keyof T, searchText: string): T[] {
    if (!list) {
      return [];
    }

    if (searchText.length === 0) {
      return list;
    }

    return list.filter((item: T) => {
      return (
        String(item[fieldName])
          .toLowerCase()
          .indexOf(searchText.toLowerCase()) > -1
      );
    });
  }
}
