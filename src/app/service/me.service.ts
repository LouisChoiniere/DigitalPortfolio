import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MeService {

    constructor(private http: HttpClient) { }

    getMe() {
        return this.http.get<any>('http://localhost:3000/me/info');
    }
}
