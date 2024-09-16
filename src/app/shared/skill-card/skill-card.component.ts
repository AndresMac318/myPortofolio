import { Component, input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {

  public skillName = input.required<string>();
  public skillScore = input.required<string>();
  public skillImageUrl = input.required<string>();

}
