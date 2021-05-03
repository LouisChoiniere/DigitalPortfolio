import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Link from '@model/link';

@Component({
    selector: 'app-adminLinks',
    templateUrl: './adminLinks.component.html',
    styleUrls: ['./adminLinks.component.scss']
})
export class AdminLinksComponent implements OnInit {

    @Input()
    links!: Link[];
    updateOnSave: boolean = false;

    modal: Modal = new Modal;

    form: FormGroup = new FormGroup({
        name: new FormControl(),
        link: new FormControl(),
        logo: new FormGroup({
            name: new FormControl(),
            style: new FormControl()
        }),
        displayOrder: new FormControl(),
    })

    constructor() { }

    ngOnInit(): void {
    }

    editLink(i: number) {
        this.modal.isOpen = true;
        
        this.modal.index = i;
        this.modal.link = this.links[i];

        this.form.setValue({
            name: this.modal.link.name,
            link: this.modal.link.link,
            logo: {
                name: this.modal.link.logo.name,
                style: this.modal.link.logo.style,
            },
            displayOrder: this.modal.link.displayOrder
        })
    }

    deleteLink(i: number) {
        this.links.splice(i, 1);
        console.log("deleted" + i);
        console.log(this.links)
    }

    newLink() {
        this.links.push({
            name: '',
            logo: {
                name: '',
                style: '',
            },
            link: '',
            displayOrder: 0
        })
    }

    modalSave() {
        const link: Link = this.form.getRawValue();
        this.links[this.modal.index] = link;

        this.modalClose();
    }

    modalClose() {
        this.modal.isOpen = false;
    }

}

class Modal {
    isOpen: boolean = false;
    link?: Link | undefined;
    index: number = -1;
}