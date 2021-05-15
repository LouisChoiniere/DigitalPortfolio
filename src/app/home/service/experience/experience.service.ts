import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
    providedIn: 'root'
})
export class ExperienceService {

    constructor(private http: HttpClient) { }

    getExperience() {
        return this.http.get<any>(environment.url + '/me/experience')
    }
}
