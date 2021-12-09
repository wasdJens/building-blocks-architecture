import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  @Input() description!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
