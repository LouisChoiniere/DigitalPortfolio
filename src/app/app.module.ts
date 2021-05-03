import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ErrorHandler, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppErrorHandler } from './app-error-handler';


import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';


import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        
        AdminModule,
        HomeModule,
        
        AppRoutingModule,
    ],
    providers: [
        { provide: ErrorHandler, useClass: AppErrorHandler }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
