import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/home/service/experience/experience.service';

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
