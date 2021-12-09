import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  @Input() picture!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
