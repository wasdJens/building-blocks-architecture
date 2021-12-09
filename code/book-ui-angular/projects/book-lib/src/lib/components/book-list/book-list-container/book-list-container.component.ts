import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../../interfaces/book.interface';

@Component({
  selector: 'lib-book-list-container',
  templateUrl: './book-list-container.component.html',
  styleUrls: ['./book-list-container.component.css']
})
export class BookListContainerComponent implements OnInit {
  @Input() books: Book[] = []
  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
