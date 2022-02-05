export class Category {   
    public category: string[];            

    constructor(category: string[]){      
      this.category = Object.keys(category);     
    }
}
export class Description {   
  public description: string[];            

  constructor(description: string[]){      
    this.description = Object.values(description);    
  }
}