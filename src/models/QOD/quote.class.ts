export class Quote {   
    public quote: string;
    public length: string;
    public author: string;
    public tags: string[];
    public category: string;
    public language: string;
    public date: string;
    public permalink: string;
    public id: string;
    public background: string;
    public title: string;

    constructor( quote: string, length: string, author: string, tags: string[], category: string, language: string, date: string, permalink: string, id: string, background: string, title: string){
      this.quote = quote;
      this.length = length;
      this.author = author;
      this.tags = tags;
      this.category = category;
      this.language = language;
      this.date = date;
      this.permalink = permalink;
      this.id = id;
      this.title = title;
      this.background = background;
    }
}