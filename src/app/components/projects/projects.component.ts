import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../service/projects/projects.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    projects!: Array<any>;

    constructor(private service: ProjectsService) {
    }

    ngOnInit(): void {
        this.service.getProjects().subscribe(data => {
            this.projects = data;
        });
    }
}
