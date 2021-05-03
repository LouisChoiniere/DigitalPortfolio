import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Blog from '@model/blog';
import Contact from '@model/contact';
import { BlogService } from './service/blog/blog.service';
import { ContactService } from './service/contact/contact.service';
import { ExperienceService } from './service/experience/experience.service';
import { MeService } from './service/me/me.service';
import { ProjectsService } from './service/projects/projects.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    me: any = {};
    projects!: Array<any>;
    experiences!: Array<any>;
    blogs!: Array<Blog>;

    constructor(
        private meService: MeService,
        private projectService: ProjectsService,
        private experiencesService: ExperienceService,
        private contactService: ContactService,
        private blogService: BlogService
    ) {
    }

    ngOnInit(): void {

        this.loadMe();
        this.loadProjects();
        this.loadExperiences();
        this.loadBlog();
    }

    loadMe() {
        this.meService.getMe().subscribe(data => {
            this.me = data
        });
    }

    loadProjects() {
        this.projectService.getProjects().subscribe(data => {
            this.projects = data;
        });
    }

    loadExperiences() {
        this.experiencesService.getExperience().subscribe(data => {
            this.experiences = data;
        });
    }

    loadBlog() {
        this.blogService.getBlog().subscribe(data => {
            data.sort((a, b) => b.date.localeCompare(a.date))
            this.blogs = data;
        })
    }



    submit(f: NgForm) {

        if (f.valid) {
            f.form.disable();

            const contact: Contact = f.form.value;
            this.contactService.sendContact(contact).subscribe({
                next: data => {
                    f.reset();
                    f.form.enable();
                    alert("Message sent!");
                },
                error: error => {
                    f.form.enable();
                    alert("The message could not be sent");
                }
            });
        }
    }
}
