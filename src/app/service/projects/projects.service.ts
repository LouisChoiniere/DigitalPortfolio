import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {

    constructor(private http: HttpClient) { }

    getProjects() {
        return this.http.get<any>('http://localhost:3000/me/project');
    }
}
