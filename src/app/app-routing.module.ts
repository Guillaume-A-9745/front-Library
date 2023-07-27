import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { ComicsComponent } from './components/comics/comics.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddBookComponent } from './components/add-book/add-book.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'books', component: BooksComponent},
  { path: 'comics', component: ComicsComponent},
  { path: 'addBook/:id', component: AddBookComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
