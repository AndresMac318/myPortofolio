import { FormControl } from "@angular/forms";

export interface ContactForm {
    name: FormControl<string>;
    email: FormControl<string>;
    factory: FormControl<string>;
    cellphone: FormControl<string>;
    message: FormControl<string>;
}