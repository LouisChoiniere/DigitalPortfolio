import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { MeComponent } from './components/me/me.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MessagesComponent } from './components/messages/messages.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { AdminLinksComponent } from './components/adminLinks/adminLinks.component';
import { AuthGuard } from '../services/auth-guard.service';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'me',
                component: MeComponent
            }, {
                path: 'projects',
                component: ProjectsComponent
            }, {
                path: 'experiences',
                component: ExperiencesComponent
            }, {
                path: 'message',
                component: MessagesComponent
            }, {
                path: 'blog-post',
                component: BlogPostsComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
