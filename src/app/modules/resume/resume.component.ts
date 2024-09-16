import { Component } from '@angular/core';
import { ResumeCardComponent } from '../../shared/resume-card/resume-card.component';


interface ResumeInfo {
  id: number;
  time: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    ResumeCardComponent
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export default class ResumeComponent {

  public experienceData: ResumeInfo[] = [
    {
      id: 1,
      time: '2022 - 2023',
      title: 'Angular developer',
      text: 'RankCV'
    },
    {
      id: 2,
      time: '2023 - 2023',
      title: 'Angular developer',
      text: 'InnoverSfot'
    },
  ];  
  
  public educationData: ResumeInfo[] = [
    {
      id: 1,
      time: '2018 - 2023',
      title: 'Ing. de Sistemas',
      text: 'Universidad de Córdoba'
    },
    {
      id: 2,
      time: '2024',
      title: 'SpringBoot',
      text: 'Udemy - Alfredo Leal'
    },
    {
      id: 3,
      time: '2022',
      title: 'Angular avanzado',
      text: 'Udemy - Fernando Herrera'
    },
  ];  

}
