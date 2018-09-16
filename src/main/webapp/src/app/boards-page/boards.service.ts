import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'

@Injectable()
export class BoardsService {

    constructor(private http: HttpClient) {
    }

    getBoards() {
        return this.http.get('/api/boards');
    }

}