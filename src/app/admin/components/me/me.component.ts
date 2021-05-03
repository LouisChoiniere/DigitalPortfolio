import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../../service/admin.service';

@Component({
    selector: 'app-me',
    templateUrl: './me.component.html',
    styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

    me: any;

    form: FormGroup = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
        about: new FormControl(),
    })

    constructor(private service: AdminService) { }

    ngOnInit(): void {
        this.service.getMe().subscribe(data => {
            this.me = data[0];

            this.form.setValue({
                firstName: this.me.firstName,
                lastName: this.me.lastName,
                about: this.me.about,
            })
        })
    }

    update() {
        this.updateForm();

        this.service.saveMe(this.me).subscribe();
    }

    newLink() {
        this.me.links.push({
            name: '',
            logo: {
                name: '',
                style: '',
            },
            link: '',
            displayOrder: 0
        })
    }

    updateForm() {
        const me = this.form.getRawValue();

        this.me = {
            ...this.me,
            ...me,
        };
    }

}
