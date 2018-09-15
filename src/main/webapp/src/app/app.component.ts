import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'app';

    constructor(
        private http: HttpClient,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.http.request('GET', '/api/user').subscribe((res: any) => {
            console.log(res);
            if (res.authenticated) {
                this.router.navigate(['boards-page']);
            }
        }, (error) => {
            console.log(error);
            this.router.navigate(['welcome-page']);
        }, () => {});
    }
}
