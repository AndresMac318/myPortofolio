import { Component } from '@angular/core';
import { ResumeCardComponent } from '../../shared/resume-card/resume-card.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';


interface ResumeInfo {
  id: number;
  date: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    ResumeCardComponent,
    TranslatePipe
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export default class ResumeComponent {

  public experienceData: ResumeInfo[] = [];  
  
  public educationData: ResumeInfo[] = [];  

  constructor(private translateSvc: TranslateService){
    this.chargeResume();
    this.translateSvc.onLangChange.subscribe(() => this.chargeResume());
  }

  chargeResume(){
    this.translateSvc.get('RESUME.EXPERIENCE').subscribe(res =>{
      this.experienceData = Object.values(res);
    });
    this.translateSvc.get('RESUME.EDUCATION').subscribe(res =>{
      this.educationData = Object.values(res);
    });
  }

}
