import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  listBooks : Book[] | undefined;
  error : string | undefined;
  host : string = "";

  constructor(private apiService : ApiService, private router : Router){}

  ngOnInit(): void {
    this.host = environment.host;
    this.getAllBooks();
  }

  getAllBooks() {
    this.apiService.getBooks().subscribe({
      next : (data) => this.listBooks = data,
      error : (err) => this.error = "Problème de chargement",
      complete : () => this.error = ""
    })
  }

  onDeleteBook(book : Book) {
    if(confirm("Voulez-vous supprimer se livre ?")) {
      this.apiService.deleteBook(book).subscribe({
        next : () => this.refreshScreen(),
        error : () => this.error = "Problème sur la suppression du livre",   
        complete : () => this.error = ""
      })
    }
  }

  refreshScreen() {
    this.getAllBooks();
  }

  onUpdateBook(book : Book) {
    this.router.navigateByUrl('addBook/' + book.id)
  }
}
