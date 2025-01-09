import { Component } from '@angular/core';
import { SkillCardComponent } from '../../shared/skill-card/skill-card.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

interface SkillInfo {
  name: string;
  rate: string;
  image_url: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ SkillCardComponent, TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export default class SkillsComponent {

  skills: SkillInfo[] = [];

  constructor(private translateSvc: TranslateService){
    this.translateSvc.get('SKILLS.list').subscribe(res=>{
      this.skills = Object.values(res);
    })
  }

}
