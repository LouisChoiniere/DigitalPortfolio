import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Contact from '@model/contact';
import { environment } from '@env/environment';
import Blog from '@model/blog';
import Project from '@model/project';
import Experience from '@model/experience';

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    constructor(private http: HttpClient) { }

    getMe() {
        return this.http.get<any[]>(environment.url + environment.admin.endpont + environment.admin.me);
    }

    saveMe(me: any) {
        return this.http.put<any>(environment.url + environment.admin.endpont + environment.admin.me, me);
    }

    getMessages() {
        return this.http.get<Contact[]>(environment.url + environment.admin.endpont + environment.admin.message);
    }

    deleteMessage(_id: string) {
        const params = new HttpParams()
            .set('id', _id);

        return this.http.delete<any>(environment.url + environment.admin.endpont + environment.admin.message, { params });
    }

    getBlogPosts() {
        return this.http.get<Blog[]>(environment.url + environment.admin.endpont + environment.admin.blog);
    }

    postBlogPost(blog: Blog) {
        return this.http.post(environment.url + environment.admin.endpont + environment.admin.blog, blog, { responseType: 'text' });
    }

    deleteBlogPost(_id: string) {
        const params = new HttpParams()
            .set('id', _id);

        return this.http.delete<any>(environment.url + environment.admin.endpont + environment.admin.blog, { params });
    }

    getProjects() {
        return this.http.get<Project[]>(environment.url + environment.admin.endpont + environment.admin.project);
    }

    saveProject(project: Project) {
        return this.http.put<any>(environment.url +environment.admin.endpont + environment.admin.project, project)
    }

    deleteProject(_id: string) {
        const params = new HttpParams()
            .set('id', _id);

        return this.http.delete<any>(environment.url +environment.admin.endpont + environment.admin.project, { params });
    }

    getExperiences() {
        return this.http.get<Experience[]>(environment.url + environment.admin.endpont + environment.admin.experience);
    }
}
