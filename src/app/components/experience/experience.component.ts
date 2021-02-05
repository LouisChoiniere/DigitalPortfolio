import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/service/experience.service';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

    experiences!: Array<any>;

    constructor(service: ExperienceService) {
        service.getExperience().subscribe(data => {
            this.experiences = data;
        });
    }

    ngOnInit(): void {
    }

}
