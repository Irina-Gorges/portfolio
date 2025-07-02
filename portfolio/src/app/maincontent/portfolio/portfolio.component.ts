import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-portfolio',
    imports: [NgClass, NgFor, NgIf],
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
    projects = [
        {
            imageSrc: './assets/images/mockup_screens/Join.png',
            altText: 'Project Join',
            title: 'Join',
            technologies: 'Angular | Typescript | HTML | CSS | Firebase',
            description:
                'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
            liveUrl: 'https://join.irina-gorges.de',
            repoUrl: 'https://github.com/deinuser/join-project',
        },
        {
            imageSrc: './assets/images/mockup_screens/Pollo loco.png',
            altText: 'Project El Pollo Loco',
            title: 'El Pollo Loco',
            technologies: 'HTML | JavaScript | CSS',
            description:
                'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and poison bottles to fight against the killer chicken.',
            liveUrl: 'https://elpolloloco.irina-gorges.de',
            repoUrl: 'https://github.com/Irina-Gorges/El-Pollo-Loco',
        },
        {
            imageSrc: './assets/images/mockup_screens/Pokedex.png',
            altText: 'Project Pokédex',
            title: 'Pokédex',
            technologies: 'HTML | JavaScript | CSS | Api',
            description:
                'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
            liveUrl: 'https://pokedex.irina-gorges.de',
            repoUrl: 'https://github.com/Irina-Gorges/Pokedex',
        },
    ];
}
