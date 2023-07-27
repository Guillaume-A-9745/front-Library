import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { Category } from 'src/app/model/category';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  myForm: FormGroup | undefined;
  book: Book | undefined;
  error: string | undefined;
  status: boolean = false;
  categories: Category[] | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.getAllCategories();
  }

  initBook() {
    this.book = new Book(0, '', '', 0, '', '', '', '', new Category(0, ''));
    this.myForm = this.formBuilder.group({
      id: [this.book.id],
      title: [this.book.title, Validators.required],
      series: [this.book.series],
      number: [this.book.number],
      summary: [this.book.summary],
      author: [this.book.author, Validators.required],
      publisher: [this.book.publisher, Validators.required],
      photo: [this.book.photo],
      category: [this.book.category],
    });
  }

  getAllCategories() {
    this.apiService.getCategories().subscribe({
      next: (data) => (this.categories = data),
      error: (err) => (this.error = 'Problème de chargement'),
      complete: () => (this.error = ''),
    });
  }

  ngOnInit(): void {
    this.initBook();
    let id = this.route.snapshot.params['id'];
    if (id > 0) {
      this.status = true;
      this.apiService.getBook(id).subscribe({
        next: (data) => {
          this.book = data;
          this.myForm!.setValue({
            id: this.book.id,
            title: this.book.title,
            series: this.book.series,
            number: this.book.number,
            summary: this.book.summary,
            author: this.book.author,
            publisher: this.book.publisher,
            photo: this.book.photo,
            category: this.book.category,
          });
        },
        error: (err) => (this.error = err),
      });
    }
  }

  onAddBook(form: FormGroup) {
    if (form.valid) {
      if (this.status) this.updateBook(form);
      else {
        this.apiService
          .postBook({
            id: form.value.id,
            title: form.value.title,
            series: form.value.series,
            number: form.value.number,
            summary: form.value.summary,
            author: form.value.author,
            publisher: form.value.publisher,
            photo: "unknown.png",
            category: form.value.category,
          })
          .subscribe({
            next: (data) => console.log(data),
            error: (err) => (this.error = err.message),
            complete: () => this.router.navigateByUrl('/books'),
          });
      }
    }
  }

  updateBook(form: FormGroup) {
    console.log(form.value.Category);
    this.apiService
      .putBook({
        id: form.value.id,
        title: form.value.title,
        series: form.value.series,
        number: form.value.number,
        summary: form.value.summary,
        author: form.value.author,
        publisher: form.value.publisher,
        photo: form.value.photo,
        category: form.value.category,
      })
      .subscribe({
        next: (data) => console.log(data),
        error: (err) => (this.error = err.message),
        complete: () => this.router.navigateByUrl('/books'),
      });
  }
}
