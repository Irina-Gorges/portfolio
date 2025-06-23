import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ScrollComponent } from '../scroll/scroll.component';

@Component({
    selector: 'app-maincontent',
    imports: [
        HomeComponent,
        AboutmeComponent,
        SkillsComponent,
        PortfolioComponent,
        ScrollComponent,
    ],
    templateUrl: './maincontent.component.html',
    styleUrl: './maincontent.component.scss',
})
export class MaincontentComponent {}
