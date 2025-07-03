import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-contactform',
    imports: [FormsModule, NgIf],
    templateUrl: './contactform.component.html',
    styleUrl: './contactform.component.scss',
})
export class ContactFormComponent {
    http = inject(HttpClient);

    contactData = {
        name: '',
        email: '',
        message: '',
        acceptedPrivacy: false,
    };

    mailTest = true;

    post = {
        endPoint: 'https://deineDomain.de/sendMail.php',
        body: (payload: any) => JSON.stringify(payload),
        options: {
            headers: {
                'Content-Type': 'text/plain',
                responseType: 'text',
            },
        },
    };

    getIconType(model: any): 'error' | 'success' | boolean {
        if (model.touched) {
            if (model.valid) return 'success';
            if (model.invalid) return 'error';
        }
        return false;
    }

    isInvalid(model: any): boolean {
        return model.invalid && model.touched;
    }

    isValid(model: any): boolean {
        return model.valid && model.touched;
    }

    getErrorMessage(model: any, field: string): string | boolean {
        if (!model.touched || model.valid) return false;
        switch (field) {
            case 'name':
                return 'Please enter a name';
            case 'email':
                return 'Please enter a valid email';
            case 'message':
                return 'Please enter a message';
            default:
                return false;
        }
    }

    onSubmit(ngForm: NgForm) {
        if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
            this.http
                .post(this.post.endPoint, this.post.body(this.contactData))
                .subscribe({
                    next: (response) => {
                        ngForm.resetForm();
                    },
                    error: (error) => {
                        console.error(error);
                    },
                    complete: () => console.info('send post complete'),
                });
        } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
            ngForm.resetForm();
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
}
