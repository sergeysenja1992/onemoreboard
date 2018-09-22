import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material'

@Component({
  selector: 'app-board-create-dialog',
  templateUrl: './board-create-dialog.component.html',
  styleUrls: ['./board-create-dialog.component.css']
})
export class BoardCreateDialogComponent implements OnInit {

    ngOnInit() {
    }

    constructor(
        public dialogRef: MatDialogRef<BoardCreateDialogComponent>
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

}
