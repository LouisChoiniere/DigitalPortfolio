import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LinksComponent } from './components/links/links.component';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
    declarations: [
        HomeComponent,

        LinksComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
    ]
})
export class HomeModule { }
