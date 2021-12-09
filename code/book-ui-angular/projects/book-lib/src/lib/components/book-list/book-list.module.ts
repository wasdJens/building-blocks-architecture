import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookListTitleComponent } from './book-list-title/book-list-title.component';
import { BookListContainerComponent } from './book-list-container/book-list-container.component';
import { BaseModule } from '../base/base.module';



@NgModule({
  declarations: [
    BookListComponent,
    BookListTitleComponent,
    BookListContainerComponent
  ],
  imports: [
    CommonModule,
    BaseModule,
  ],
  exports: [
    BookListComponent,
    BookListContainerComponent,
    BookListTitleComponent
  ]
})
export class BookListModule { }
