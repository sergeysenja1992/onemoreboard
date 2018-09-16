import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boards-page',
  templateUrl: './boards-page.component.html',
  styleUrls: ['./boards-page.component.css']
})
export class BoardsPageComponent implements OnInit {

    displayedColumns: string[] = ['name', 'description'];
    transactions: Transaction[] = [
        {name: 'Beach ball', description: 4},
        {name: 'Towel', description: 5},
        {name: 'Frisbee', description: 2},
        {name: 'Sunscreen', description: 4},
        {name: 'Cooler', description: 25},
        {name: 'Swim suit', description: 15},
    ];

  constructor() { }

  ngOnInit() {
  }



}
