import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../../interfaces/book.interface';
import { Card } from '../../../interfaces/card.interface';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'lib-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  @Input() books!: Book[];

  public booksAsCards: Card[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.booksAsCards = this.bookService.mapBooksToCards(this.books);
  }
}
