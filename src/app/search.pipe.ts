import { Pipe, PipeTransform } from '@angular/core';
import { products } from './productsi';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allproducts:products[],userword:string): products[] {
    return allproducts.filter(  (onepro)=>onepro.title.toLowerCase().includes(userword.toLowerCase())  );
  }

}
