import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../../interfaces/card.interface';

@Component({
  selector: 'lib-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Input() cards: Card[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
