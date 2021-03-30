import { Component, OnInit } from '@angular/core';
import Contact from '@model/contact';
import { AdminService } from './service/admin.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    messages!: Contact[];

    constructor(private service: AdminService) {
    }

    ngOnInit(): void {

        this.service.getMessages().subscribe(data => {
            this.messages = data;
        })

    }

}
