import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'ng-tr',
    template: '<ng-container>{{translationKey | translate}}</ng-container>'
})
export class NgTrComponent implements OnInit {

  @Input('key') translationKey: String;

  constructor() { }

  ngOnInit() {

  }

}
