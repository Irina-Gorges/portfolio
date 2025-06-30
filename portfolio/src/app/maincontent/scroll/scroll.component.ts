import { Component } from '@angular/core';

@Component({
    selector: 'app-scroll',
    imports: [],
    templateUrl: './scroll.component.html',
    styleUrl: './scroll.component.scss',
})
export class ScrollComponent {
    scrollToDown(): void {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    }
}
