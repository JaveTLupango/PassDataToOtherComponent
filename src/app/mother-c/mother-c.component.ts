import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mother-c',
  templateUrl: './mother-c.component.html',
  styleUrls: ['./mother-c.component.css']
})
export class MotherCComponent implements OnInit {

  passToChild : string;

  constructor() {
    this.passToChild = "Code-Life";
  }

  ngOnInit(): void {
  }

}
