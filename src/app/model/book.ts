import { Category } from "./category";

export class Book {
    id: number;
    title: string;
    series: string;
    number: number;
    summary: string;
    author: string;
    publisher: string;
    photo: string;
    category: Category;
    
    constructor(id:number,title:string,series:string,number:number,summary:string,author:string,publisher:string,phot:string,category:Category){
        this.id = id;
        this.title = title;
        this.series = series;
        this.number = number;
        this.summary = summary;
        this.author = author;
        this.publisher = publisher;
        this.photo = photo;
        this.category = category;
    }
}
