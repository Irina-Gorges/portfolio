import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    activeLink: string = 'aboutme'; // Standardwert
    currentLanguage: 'de' | 'en' = 'en'; //Standartsprache Englisch

    scrollTo(id: string) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    setActive(link: string): void {
        this.activeLink = link;
    }

    setLanguage(lang: 'de' | 'en') {
        this.currentLanguage = lang;
    }
}
