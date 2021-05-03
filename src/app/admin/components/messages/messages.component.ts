import { Component, OnInit } from '@angular/core';
import Contact from '@model/contact';
import { AdminService } from '../../service/admin.service';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

    messages!: Contact[];

    constructor(private service: AdminService) { }

    ngOnInit(): void {

        this.loadMessages();
    }

    loadMessages() {
        this.service.getMessages().subscribe(data => {
            this.messages = data;
        });
    }

    deleteMessage(_id: string) {

        const index: number = this.messages.findIndex((e) => e._id == _id);
        if (index > -1)
            this.messages.splice(index, 1);

        this.service.deleteMessage(_id).subscribe({
            complete: () => {
                console.log("Deleted message " + _id);
            },
            error: error => {
                console.log("Could not delete message " + _id);
                console.log(error);
                this.loadMessages();
            }
        });
    }
}
