import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ExperienceService {

    constructor(private http: HttpClient) { }

    getExperience() {
        return this.http.get<any>('http://localhost:3000/me/experience')
    }
}
