import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Contact from '@model/contact';
import { environment } from '@env/environment';
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    constructor(private http: HttpClient) { }

    getMessages() {
        return this.http.get<Contact[]>(environment.url + environment.admin.endpont + environment.admin.contact);
    }
}
