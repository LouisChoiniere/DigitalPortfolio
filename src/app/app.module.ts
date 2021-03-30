import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './home/components/projects/projects.component';
import { LinksComponent } from './home/components/links/links.component';
import { MeComponent } from './home/components/me/me.component';
import { ExperienceComponent } from './home/components/experience/experience.component';
import { ContactComponent } from './home/components/contact/contact.component';
import { BlogComponent } from './home/components/blog/blog.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AppErrorHandler } from './app-error-handler';
import { CommonModule } from '@angular/common';
import { DummyCompComponent } from './dummy-comp/dummy-comp.component';

@NgModule({
    declarations: [
        AppComponent,
        ProjectsComponent,
        LinksComponent,
        MeComponent,
        ExperienceComponent,
        ContactComponent,
        BlogComponent,
        HomeComponent,
        AdminComponent,
        DummyCompComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        RouterModule
    ],
    providers: [
        { provide: ErrorHandler, useClass: AppErrorHandler }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
