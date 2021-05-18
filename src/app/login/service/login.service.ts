import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    signIn(credentials: any) {
        return this.http.post<any>(environment.url + environment.auth.signIn, credentials)
            .pipe(
                map((response: any) => {
                    if (response && response.token) {
                        localStorage.setItem('token', response.token);
                        return true;
                    } else {
                        return false;
                    }
                })
            );
    }

    isLoggedIn() {
        const jwtHelper = new JwtHelperService();
        const token = localStorage.getItem('token');

        if (!token)
            return false;

        return !jwtHelper.isTokenExpired(token);
    }

    getToken() {
        return localStorage.getItem('token');
    }
}
