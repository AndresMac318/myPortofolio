import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

// library for email messages
import emailjs from '@emailjs/browser';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TranslatePipe
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export default class ContactComponent implements OnInit {

  public successSend = false;
  public errorSend = false;
  public requiredFields = false;
  
  public contactForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    cellphone: ['', [Validators.required, Validators.minLength(7)]],
    message: ['', [Validators.required, Validators.minLength(3)]],
  })
  
  ngOnInit(): void {}

  constructor(private formBuilder: NonNullableFormBuilder){}

  async sendForm(){
    if (this.contactForm.invalid) {      
      this.requiredFields = true;

      return setTimeout(() => {
        this.requiredFields = false;
      }, 3000);
    }

    emailjs.init('0hhfzyiN1jIolJwSe');
    const response:{status:number, text: string} = await emailjs.send("service_qmrl6dj","template_t0gdny4",{
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      cellphone: this.contactForm.value.cellphone,
      message: this.contactForm.value.message,
    });
    
    if (response.status === 200) {
      this.successSend = true;
      setTimeout(()=>{
        this.successSend = false;
      }, 3000);
      
      return this.contactForm.reset();  
    }

    this.errorSend = true;
    setTimeout(()=>{
      this.successSend = false;
    }, 3000);
    
    return this.contactForm.reset();
    
  }
  
}
