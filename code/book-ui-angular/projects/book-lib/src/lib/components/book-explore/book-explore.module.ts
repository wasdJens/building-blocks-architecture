import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookExploreContainerComponent } from './book-explore-container/book-explore-container.component';
import { BookExplorePreviewComponent } from './book-explore-preview/book-explore-preview.component';
import { BookExploreSearchComponent } from './book-explore-search/book-explore-search.component';
import { BookExploreResultComponent } from './book-explore-result/book-explore-result.component';
import { BaseModule } from '../base/base.module';



@NgModule({
  declarations: [
    BookExploreContainerComponent,
    BookExplorePreviewComponent,
    BookExploreSearchComponent,
    BookExploreResultComponent
  ],
  imports: [
    CommonModule,
    BaseModule,
  ],
  exports: [
    BookExploreContainerComponent,
  ]
})
export class BookExploreModule { }
