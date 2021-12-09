import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-book-explore-search',
  templateUrl: './book-explore-search.component.html',
  styleUrls: ['./book-explore-search.component.css']
})
export class BookExploreSearchComponent implements OnInit {
  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(searchTerm: any) {
    console.log(searchTerm.target.value);
    this.search.emit(searchTerm.target.value);
  }
}
