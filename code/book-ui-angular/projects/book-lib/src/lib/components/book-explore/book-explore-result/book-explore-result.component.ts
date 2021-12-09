import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Book } from '../../../interfaces/book.interface';
import { Card } from '../../../interfaces/card.interface';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'lib-book-explore-result',
  templateUrl: './book-explore-result.component.html',
  styleUrls: ['./book-explore-result.component.css']
})
export class BookExploreResultComponent implements OnInit, OnChanges {
  @Input() books: Book[] = [];

  public cards: Card[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.cards = this.bookService.mapBooksToCards(this.books);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.cards = this.bookService.mapBooksToCards(this.books);
  }
}
