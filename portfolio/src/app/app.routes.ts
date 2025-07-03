import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy', component: PrivacyComponent },
];
