import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-book-list-title',
  templateUrl: './book-list-title.component.html',
  styleUrls: ['./book-list-title.component.css']
})
export class BookListTitleComponent implements OnInit {
  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
