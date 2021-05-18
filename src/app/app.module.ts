import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ErrorHandler, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppErrorHandler } from './app-error-handler';


import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';


import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/components/login/login.component';
import { AuthGuard } from './services/auth-guard.service';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                allowedDomains: ["localhost:3000"]
            },
        }),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        AdminModule,
        HomeModule,

        AppRoutingModule,
    ],
    providers: [
        AuthGuard,
        { provide: ErrorHandler, useClass: AppErrorHandler }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

export function tokenGetter() {
    return localStorage.getItem("token");
}