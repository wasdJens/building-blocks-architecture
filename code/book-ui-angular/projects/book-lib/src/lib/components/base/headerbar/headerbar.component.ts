import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.css']
})
export class HeaderbarComponent implements OnInit {
  @Input() title!: string;
  @Input() menuItems!: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
