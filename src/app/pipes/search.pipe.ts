import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: any[] | null, searchText: string): any[] {
    // if no items, return an empty array
    if (!items) {
      return [];
    }
    // if input is empty, return the items array
    if (!searchText) {
      return items;
    }
    // set the search input to lowercase
    searchText = searchText.toLocaleLowerCase();

    // return only the items that include characters in the search text
    return items.filter((item:any) => {
      return item.toLocaleLowerCase().includes(searchText);
    })
  }

}
