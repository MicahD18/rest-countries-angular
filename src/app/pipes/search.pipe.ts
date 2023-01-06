import { Pipe, PipeTransform } from '@angular/core';
import { LocalService } from '../services/local.service';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  // store into local storage
  searchKey: string = 'search';

  constructor(private localStore: LocalService) {}

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
    return items.filter((item:any, index: number) => {

      console.log(index);
      
      const result = item.name.toLocaleLowerCase().includes(searchText);
      
      // this.localStore.saveData(this.searchKey, searchText);

      return result;
    })
  }

}
