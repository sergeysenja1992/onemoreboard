import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'
import {Observable} from 'rxjs/Rx'
import {ContextService} from '../context/context.service'

@Injectable()
export class AccountService {

    private user: any = null;

    constructor(
        private http: HttpClient,
        private contextService: ContextService,
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
                this.contextService.emit('user', res);
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
        this.contextService.emit('user', null);
        this.http.post('/logout', {}).subscribe((res: any) => {
            this.router.navigate(['/welcome-page'])
        }, (error : any) => {
            if (error.status == 403 || error.status == 302 ) {
                this.router.navigate(['/welcome-page'])
            }

        });
    }
}