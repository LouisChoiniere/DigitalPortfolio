import { Component, OnInit } from '@angular/core';
import { MeService } from '../../service/me/me.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {
    
    me: any;

    constructor(service: MeService) {
        service.getMe().subscribe(data => {
            this.me = data
        });
        console.log(this.me);
    }

  ngOnInit(): void {
  }

}
