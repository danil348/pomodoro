import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  constructor() { }

  tasks = [
    {title: "first", text: "zxc", id: 0},
  ]

  ngOnInit(): void {

  }

}
