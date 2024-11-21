import { Component } from '@angular/core';
import HomeComponent from '../../modules/home/home.component';
import WorksComponent from '../../modules/works/works.component';
import ResumeComponent from '../../modules/resume/resume.component';
import SkillsComponent from '../../modules/skills/skills.component';
import ContactComponent from '../../modules/contact/contact.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HomeComponent,
    WorksComponent,
    ResumeComponent,
    SkillsComponent,
    ContactComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export default class MainComponent {

}
