import { Category } from "./category";

export class Comic {
    id: number;
    title: string;
    series: string;
    number: number;
    summary: string;
    drawer: string;
    scriptwriter: string;
    colourist: string;
    publisher: string;
    category: Category;
    
    constructor(id:number,title:string,series:string,number:number,summary:string,drawer:string,scriptwriter:string,colourist:string,publisher:string,category:Category){
        this.id = id;
        this.title = title;
        this.series = series;
        this.number = number;
        this.summary = summary;
        this.drawer = drawer;
        this.scriptwriter = scriptwriter;
        this.colourist = colourist;
        this.publisher = publisher;
        this.category = category;
    }
}
