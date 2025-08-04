import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
    selector: 'app-privacy',
    imports: [HeaderComponent,FooterComponent],
    templateUrl: './privacy.component.html',
    styleUrl: './privacy.component.scss',
})
export class PrivacyComponent {}
