import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  num = Math.floor(Math.random() * 9);
  constructor() { }

  ngOnInit(): void {
  }

}
