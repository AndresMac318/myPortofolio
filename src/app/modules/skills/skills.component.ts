import { Component } from '@angular/core';
import { SkillCardComponent } from '../../shared/skill-card/skill-card.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ SkillCardComponent ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export default class SkillsComponent {

}
