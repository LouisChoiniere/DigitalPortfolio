import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import Link from '@model/link';

@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

    @Input() links: Link[] = [];

    constructor(private sanitizer: DomSanitizer) {
    }

    ngOnInit(): void {
        this.links = this.links.sort((a, b) => a.displayOrder - b.displayOrder);
    }

    bypassSecurity(str: any): any {
        return this.sanitizer.bypassSecurityTrustUrl(str);
    }
}
