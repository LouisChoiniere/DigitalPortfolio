import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MeService {

    constructor(private http: HttpClient) { }

    getMe() {
        return this.http.get<any>(environment.url + '/me/info');
    }
}
