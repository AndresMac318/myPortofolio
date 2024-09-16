import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

// library for email messages
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export default class ContactComponent implements OnInit {

  public successSend = false;
  public errorSend = false;
  
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
      return alert('Todos los datos son requiridos!');
    }

    emailjs.init('0hhfzyiN1jIolJwSe');
    const response:{status:number, text: string} = await emailjs.send("service_qmrl6dj","template_t0gdny4",{
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      cellphone: this.contactForm.value.cellphone,
      message: this.contactForm.value.message,
    });
    
    console.log(this.contactForm.value);
    
    if (response.status === 200) {
      console.log('response 200:', response);
      this.successSend = true;
      setTimeout(()=>{
        this.successSend = false;
      },3000);
      
      return this.contactForm.reset();  
    }

    console.log('bad response:', response)
    this.errorSend = true;
    setTimeout(()=>{
      this.successSend = false;
    },3000);
    
    return this.contactForm.reset();
    
    
  }
  
}
