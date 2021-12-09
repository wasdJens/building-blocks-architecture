import { Component, OnInit } from '@angular/core';
import { Book } from '../../../interfaces/book.interface';
import { Card } from '../../../interfaces/card.interface';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'lib-book-explore-container',
  templateUrl: './book-explore-container.component.html',
  styleUrls: ['./book-explore-container.component.css'],
})
export class BookExploreContainerComponent implements OnInit {
  public books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {}

  handleSearch(search: string) {
    if (search === '') {
      this.books = [];
    } else {
      const result = this.bookService.getAll().filter((book) => {
        return book.title.toLowerCase().includes(search.toLowerCase());
      });
      this.books = result;
    }
  }
}
