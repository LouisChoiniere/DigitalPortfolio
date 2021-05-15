import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import Contact from '@model/contact';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor(private http: HttpClient) { }

    sendContact(contact: Contact) {
        return this.http.post(environment.url + '/me/contact', contact, { responseType: 'text'});
    }
}
