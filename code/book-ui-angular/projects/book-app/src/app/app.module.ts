import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BaseModule } from 'projects/book-lib/src/lib/components/base/base.module';
import { BookExploreModule } from 'projects/book-lib/src/lib/components/book-explore/book-explore.module';
import { BookListModule } from 'projects/book-lib/src/lib/components/book-list/book-list.module';
import { LayoutsModule } from 'projects/book-lib/src/lib/components/layouts/layouts.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseModule,
    BookListModule,
    LayoutsModule,
    BookExploreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
