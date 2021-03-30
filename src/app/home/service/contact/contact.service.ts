import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Contact from '@model/contact';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor(private http: HttpClient) { }

    sendContact(contact: Contact) {
        return this.http.post('http://localhost:3000/me/contact', contact, { responseType: 'text'});
    }
}
