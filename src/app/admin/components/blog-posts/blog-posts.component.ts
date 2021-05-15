import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Blog from '@model/blog';
import { AdminService } from '../../service/admin.service';

@Component({
    selector: 'app-blog-posts',
    templateUrl: './blog-posts.component.html',
    styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {

    blogPosts!: Blog[];

    constructor(private service: AdminService) { }

    ngOnInit(): void {

        this.loadBlogPosts();
    }

    loadBlogPosts() {
        this.service.getBlogPosts().subscribe(data => {
            data.sort((a, b) => b.date.localeCompare(a.date))
            this.blogPosts = data;
        });
    }

    newBlogPostSubmit(f: NgForm) {

        if (f.valid) {
            f.form.disable();

            const blog: Blog = f.form.value;
            this.service.postBlogPost(blog).subscribe({
                next: data => {
                    console.log("Added blog post");
                    f.reset();
                    f.form.enable();
                },
                error: error => {
                    console.error("Could not add new Blog Post");
                    f.form.enable();
                    console.error(error);
                },
                complete: () => {
                    this.loadBlogPosts()
                }
            })

        }
    }

    deleteBlogPost(_id: string) {

        const index: number = this.blogPosts.findIndex((e) => e._id == _id);
        if (index > -1)
            this.blogPosts.splice(index, 1);

        this.service.deleteBlogPost(_id).subscribe({
            complete: () => {
                console.log("Deleted blog post " + _id);
            },
            error: error => {
                console.log("Could not delete blog post " + _id);
                console.log(error);
                this.loadBlogPosts();
            }
        });
    }
}
