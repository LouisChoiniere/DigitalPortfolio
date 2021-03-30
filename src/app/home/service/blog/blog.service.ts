import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Blog from '@model/blog';

@Injectable({
    providedIn: 'root'
})
export class BlogService {

    constructor(private http: HttpClient) { }

    getBlog() {
        return this.http.get<Blog[]>('http://localhost:3000/me/blog')
    }
}
