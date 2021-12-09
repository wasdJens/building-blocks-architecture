import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() picture!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() description!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
