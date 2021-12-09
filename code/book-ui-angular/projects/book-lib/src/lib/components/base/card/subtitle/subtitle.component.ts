import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.css']
})
export class SubtitleComponent implements OnInit {
  @Input() subtitle!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
