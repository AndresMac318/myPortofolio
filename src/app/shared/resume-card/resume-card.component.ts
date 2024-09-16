import { Component, input } from '@angular/core';

interface ResumeInfo {
  id: number;
  time: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-resume-card',
  standalone: true,
  imports: [],
  templateUrl: './resume-card.component.html',
  styleUrl: './resume-card.component.scss'
})
export class ResumeCardComponent {

  public cardInfo = input.required<ResumeInfo>();

}
