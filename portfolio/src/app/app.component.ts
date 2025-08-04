import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { MaincontentComponent } from './maincontent/maincontent.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
// import { PrivacyComponent } from './privacy/privacy.component';
// import { ImprintComponent } from './imprint/imprint.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, FooterComponent, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'portfolio';
}
