import { Component, OnInit } from '@angular/core';
import Blog from '@model/blog'
import { BlogService } from 'src/app/service/blog/blog.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    blogs!: Array<Blog>;

    constructor(service: BlogService) {
        service.getBlog().subscribe(data => {
            this.blogs = data;
        })
    }

    ngOnInit(): void {
    }

}
