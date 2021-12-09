import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { PictureComponent } from './card/picture/picture.component';
import { TitleComponent } from './card/title/title.component';
import { SubtitleComponent } from './card/subtitle/subtitle.component';
import { DescriptionComponent } from './card/description/description.component';
import { CardListComponent } from './card-list/card-list.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { MenuItemComponent } from './headerbar/menu-item/menu-item.component';



@NgModule({
  declarations: [
    CardComponent,
    PictureComponent,
    TitleComponent,
    SubtitleComponent,
    DescriptionComponent,
    CardListComponent,
    HeaderbarComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardListComponent,
    HeaderbarComponent,
  ]
})
export class BaseModule { }
