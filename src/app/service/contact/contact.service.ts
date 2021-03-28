import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Contact from '@model/contact';
import { Observer } from 'rxjs/internal/types';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor(private http: HttpClient) { }

    sendContact(contact: Contact, successCallback: Function, errorCallback: Function) {
        this.http.post('http://localhost:3000/me/contact', contact, { responseType: 'text'})
            .subscribe({
                next: data => {
                    successCallback();
                },
                error: error => {
                    console.error('There was an error!', error);
                    errorCallback();
                }
            });
    }
}
