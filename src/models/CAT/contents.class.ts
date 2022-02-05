import {Category, Description} from './category.class'
export class Contents {   
    public categories: Category[];
    public descriptions: Description[];
    
    constructor(categories : Category[], descriptions : Description[]){
      this.categories = categories;
      this.descriptions = descriptions;
    }
}