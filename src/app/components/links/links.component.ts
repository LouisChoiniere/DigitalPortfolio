import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  @Input() links: { name: string, logo: { name: string, style: string}, link: string, displayOrder: number }[] = [];

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.links = this.links.sort((a, b) => a.displayOrder - b.displayOrder);
  }

  bypassSecurity(str: any): any {
    return this.sanitizer.bypassSecurityTrustUrl(str);
  }
}
