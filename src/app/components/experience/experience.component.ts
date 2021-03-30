import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/service/experience/experience.service';
import { ProjectsService } from 'src/app/service/projects/projects.service';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

    experiences!: Array<any>;

    constructor(private service: ExperienceService) {
    }

    ngOnInit(): void {
        this.service.getExperience().subscribe(data => {
            this.experiences = data;
        });
    }

}
