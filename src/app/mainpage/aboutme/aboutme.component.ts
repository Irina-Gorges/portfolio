import { Component } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-aboutme',
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss',
})
export class AboutmeComponent {
  //#region variables
  currentLang: 'EN' | 'DE' = 'EN';

  text = {
    header: '',
    intro: '',
    creative: '',
    logical: '',
  };
  //#endregion

  constructor(private languageService: LanguageService) {
    this.languageService.currentLang.subscribe((lang) => {
      this.currentLang = lang;
      if (lang === 'DE') {
        this.text = {
          header: 'Über mich',
          intro:
            'Ich bin Frontend-Entwicklerin mit Sitz in Einbeck, arbeite jedoch am liebsten remote. Wenn du frische Ideen suchst und Wert auf einfache, effektive Lösungen legst, bin ich genau die Richtige für dein Projekt, unabhängig vom Standort.',
          creative:
            'Es macht mir großen Spaß, kreative und effektive Lösungen für die Gestaltung digitaler Erlebnisse zu finden. Die Vielfalt und Dynamik der Programmierung inspiriert mich jeden Tag aufs Neue.',
          logical:
            'Ich bin diszipliniert und verfüge über ein logisches Verständnis, das mir hilft, auch mit komplexeren Problemen umzugehen. Sehen Sie sich gerne meine Projekte an, um einen Eindruck davon zu bekommen, woran ich gearbeitet habe.',
        };
      } else {
        this.text = {
          header: 'About me',
          intro:
            'I am a frontend developer based in Einbeck, Germany, but I prefer working remotely. If you are looking for fresh ideas and value simple, effective solutions, I am the right person for your project, no matter where you are located.',
          creative:
            'I really enjoy finding creative and effective solutions for designing digital experiences. The diversity and dynamism of programming inspires me every day.',
          logical:
            'I am disciplined and have a logical mindset that helps me tackle even more complex problems. Feel free to browse my projects to get an idea of what I have been working on.',
        };
      }
    });
  }
}
