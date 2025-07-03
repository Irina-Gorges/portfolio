import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    imports: [RouterLink],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    constructor(private router: Router) {}

    scrollToImprintsTop() {
        this.router.navigateByUrl('/imprint').then(() => {
            window.scrollTo(0, 0);
        });
    }
}
