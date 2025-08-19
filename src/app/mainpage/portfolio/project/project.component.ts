import { Component } from '@angular/core';
import { Projects } from '../../../shared/interfaces/projects';
import { LanguageService } from '../../../shared/services/language.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [NgClass],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})

export class ProjectComponent {

  currentLang: 'EN' | 'DE' = 'EN';

  projects: Array<Projects> = [
    {
      image: '/assets/images/Join.png',
      name: 'Join',
      skills: 'Angular | Typescript | HTML | SCSS',
      description: {
        EN: 'Task manager inspired by the Kanban FileSystem. Create and organize tasks using drag and drop DeclareFunctionStmt, assign users and categories.',
        DE: 'Ein von Kanban inspirierter Aufgabenmanager. Kreiere und erschaffe Aufgaben, behalte stets den Überblick über den aktuellen Stand und sorge für perfekte Abstimmung im Team!'
      },
      urlLiveTest: 'https://join.irina-gorges.de',
      urlGithub: 'https://github.com/Irina-Gorges/Join'
    },
    {
      image: '/assets/images/Pollo loco.png',
      name: 'El Pollo Loco',
      skills: 'JavaScript | HTML | CSS',
      description: {
        EN: 'A simple browser game programmed with Javascript. Based on object-oriented approach. Help Pepe defeat the crazy chickens!',
        DE: 'Ein simples Browsergame, basierend auf objektorientiertem JavaScript! Hilf Pepe dabei, die verrückten Hühner zu besiegen!'
      },
      urlLiveTest: 'https://elpolloloco.irina-gorges.de',
      urlGithub: 'https://github.com/Irina-Gorges/El-Pollo-Loco'
    },
    {
      image: '/assets/images/Pokedex.png',
      name: 'Pokédex',
      skills: 'Javascript | HTML | CSS | API',
      description: {
        EN: 'Based on the PokéAPI. A simple library that provides and catalogues pokémon information. Go catch`em all!',
        DE: 'Eine kleine Bibliothek basierend auf der PokéAPI. Entdecke Pokémon und Infos über sie. Komm und schnapp sie dir!'
      },
      urlLiveTest: 'https://pokedex.irina-gorges.de',
      urlGithub: 'https://github.com/Irina-Gorges/Pokedex'
    },
  ];

  constructor(private languageService: LanguageService) {
    this.languageService.currentLang.subscribe((lang) => {
      this.currentLang = lang;
    });
  }
}
