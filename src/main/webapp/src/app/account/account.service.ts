import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'
import {Observable} from 'rxjs/Rx'

@Injectable()
export class AccountService {

    private user: any = null;

    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        this.identify().subscribe(user => this.user = user);
    }

    isAuthentificated() {
        return this.user != null;
    }

    identify() {
        return Observable.create(obs => {
            this.http.request('GET', '/api/user').subscribe((res: any) => {
                obs.next(res);
                this.router.navigate(['/boards-page']);
            }, (error) => {
                console.log(error);
                obs.next(false);
            }, () => {
                obs.complete();
            });
        })
    }

    logout() {
        this.user = null;
        this.http.post('/logout', {}).subscribe((res: any) =>
            this.router.navigate(['/welcome-page'])
        );
    }
}