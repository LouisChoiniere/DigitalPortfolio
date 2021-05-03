import { Component, OnInit } from '@angular/core';
import Experience from '@model/experience';
import { AdminService } from '../../service/admin.service';

@Component({
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

    experiences!: Experience[];

    constructor(private service: AdminService) { }

    ngOnInit(): void {

        this.loadExperiences();
    }

    loadExperiences() {
        this.service.getExperiences().subscribe(data => {
            this.experiences = data;
        })
    }
}
