import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticateService } from './authenticate.service';
import { Book } from '../model/book';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private auth : AuthenticateService) { }

  public getBooks() {
    return this.http.get<Book[]>(environment.host+"/books");
  }
}
