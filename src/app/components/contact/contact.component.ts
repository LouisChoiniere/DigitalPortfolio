import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Contact from '@model/contact';
import { ContactService } from 'src/app/service/contact/contact.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

    constructor(private service: ContactService) { }

    ngOnInit(): void {
    }

    submit(f: NgForm) {

        if (f.valid) {
            f.form.disable()

            const contact: Contact = f.form.value;
            this.service.sendContact(contact).subscribe({
                next: data => {
                    f.reset();
                    f.form.enable();
                    alert("Message sent!");
                },
                error: error => {
                    f.form.enable();
                    alert("The message could not be sent");
                }
            });
        }
    }

}
