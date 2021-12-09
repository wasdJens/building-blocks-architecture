import { Component, OnInit } from '@angular/core';
import { Book } from 'projects/book-lib/src/lib/interfaces/book.interface';
import { BookService } from 'projects/book-lib/src/lib/services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'book-app';

  public recommended: Book[] = [];
  public latest: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.recommended = this.bookService.getRecommended();
    this.latest = this.bookService.getLatest();
  }
}
