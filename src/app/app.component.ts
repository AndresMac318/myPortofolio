import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import HomeComponent from './modules/home/home.component';
import WorksComponent from './modules/works/works.component';
import ResumeComponent from './modules/resume/resume.component';
import SkillsComponent from './modules/skills/skills.component';
import ContactComponent from './modules/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent,
    HomeComponent,
    WorksComponent,
    ResumeComponent,
    SkillsComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'myportfolio';

  constructor( private activatedRoute: ActivatedRoute ){}

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      if(fragment) this.jumpToSection(fragment);
    });
  }

  jumpToSection(section: string | null){
    if (section) {
      document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
    }
  }
}
