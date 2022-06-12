import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-c',
  templateUrl: './child-c.component.html',
  styleUrls: ['./child-c.component.css']
})
export class ChildCComponent implements OnInit {
  @Input() getData : any;

  data : string;

  constructor() {
  }

  ngOnInit(): void {

    this.data = this.getData;
  }

}
