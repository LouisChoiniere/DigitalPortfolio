import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MeComponent } from './components/me/me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { MessagesComponent } from './components/messages/messages.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { AdminLinksComponent } from './components/adminLinks/adminLinks.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
    declarations: [
        AdminComponent,

        MeComponent,
        ProjectsComponent,
        ExperiencesComponent,
        MessagesComponent,
        BlogPostsComponent,
        AdminLinksComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        AdminRoutingModule
    ]
})
export class AdminModule { }
