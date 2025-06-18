import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutmeComponent } from './maincontent/aboutme/aboutme.component';
import { SkillsComponent } from './maincontent/skills/skills.component';
import { PortfolioComponent } from './maincontent/portfolio/portfolio.component';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        MaincontentComponent,
        HeaderComponent,
        FooterComponent,
        AboutmeComponent,
        SkillsComponent,
        PortfolioComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'portfolio';
}
