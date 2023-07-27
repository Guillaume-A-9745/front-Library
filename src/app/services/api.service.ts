import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticateService } from './authenticate.service';
import { Book } from '../model/book';
import { environment } from 'src/environments/environment';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private auth : AuthenticateService) { }

  public getBooks() {
    return this.http.get<Book[]>(environment.host+"/books");
  }

  public getBook(id: number) {
    return this.http.get<Book>(environment.host+"/books/" + id);  
  }

  public postBook(book : any) {
    return this.http.post<Book>(environment.host+"/books", book );     //, {headers:new HttpHeaders({'Authorization': this.auth.getToken()})}
  }

  public putBook(book: Book) {
    console.log(book)
    return this.http.put<Book>(environment.host + "/book" , book );   //, {headers:new HttpHeaders({'Authorization': this.auth.getToken()})}
  }

  public deleteBook(book : Book) {
    return this.http.delete(environment.host + "/books/" + book.id );  //, {headers:new HttpHeaders({'Authorization': this.auth.getToken()})}
  }

  public getCategories() {
    return this.http.get<Category[]>(environment.host + "/categories");
  }
}
