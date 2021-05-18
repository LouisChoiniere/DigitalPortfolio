import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    })

    constructor(
        private router: Router,
        private service: AuthService
    ) { }

    ngOnInit(): void {

    }

    login() {
        this.service.signIn(this.form.getRawValue())
            .subscribe((result: any) => {
                if (result)
                    this.router.navigate(['/admin'])

            });
    }

}
