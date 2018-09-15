import {Component, OnInit} from '@angular/core';
import {Event, Router, RouterEvent} from '@angular/router'
import {AccountService} from './account/account.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'app';

    constructor(
        private router: Router,
        private accountService: AccountService
    ) {
    }

    ngOnInit(): void {

        this.router.events.subscribe( (e: Event) => {

            if (!(e instanceof RouterEvent)) {
                return;
            }

            const event: RouterEvent = e;
            if (!this.accountService.isAuthentificated() && event.url != '/welcome-page' && event.url != '/') {
                console.log('User not authenticated');
                this.router.navigate(['/welcome-page']);
            }
        });
    }
}
