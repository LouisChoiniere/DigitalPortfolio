import { Component, OnInit } from '@angular/core';
import Project from '@model/project';
import { AdminService } from '../../service/admin.service';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    projects!: Project[];
    modal: Modal = new Modal;

    form: FormGroup = new FormGroup({
        title: new FormControl(),
        description: new FormControl(),
        date: new FormControl(),
        goal: new FormControl(),
        displayOrder: new FormControl(),
    })

    constructor(private service: AdminService) { }

    ngOnInit(): void {

        this.loadProjects();
    }

    loadProjects() {
        this.service.getProjects().subscribe(data => {
            this.projects = data;

            console.log(data);
            console.log(this.projects);
        })
    }

    addProject() {
        this.projects.push({
            _id: undefined,
            title: "",
            description: "",
            date: "",
            links: [],
            displayOrder: 99,
            goal: "",
        })
    }

    editProject(id?: string) {
        this.modal.isOpen = true;

        if (this.modal.project?._id !== id) {
            this.modal.project = (JSON.parse(JSON.stringify(this.projects.find(x => x._id == id))))

            this.form.setValue({
                title: this.modal.project?.title,
                description: this.modal.project?.description,
                date: this.modal.project?.date,
                goal: this.modal.project?.goal,
                displayOrder: this.modal.project?.displayOrder,
            });
        }
    }

    saveProject(id?: string) {
        const project = this.projects.find(x => x._id == id);

        if (project)
            this.service.saveProject(project).subscribe();
    }

    

    deleteProject(id?: string) {
        if (id)
            this.service.deleteProject(id).toPromise().finally(() => {
                this.loadProjects();
            });
    }

    modalSave() {
        const project: Project = this.form.getRawValue();
        const projectIndex: number = this.projects.findIndex(x => x._id == this.modal.project?._id);

        this.projects[projectIndex] = {
            ...this.projects[projectIndex],
            ...project
        };

        this.modalClose();
    }

    modalClose() {
        this.modal.isOpen = false;
    }

    newLink(id?: string) {
        this.projects.find(x => x._id == id)?.links.push({
            name: '',
            logo: {
                name: '',
                style: '',
            },
            link: '',
            displayOrder: 0
        })
    }

}

class Modal {
    isOpen: boolean = false;
    project?: Project | undefined;
}