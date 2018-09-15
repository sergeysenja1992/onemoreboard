import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {AccountService} from '../account/account.service'

@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent implements OnInit {

    isAuthentificated = false;

    constructor(private accountService: AccountService) {
    }

    ngOnInit(): void {
        this.isAuthentificated = this.accountService.isAuthentificated();
    }

}
