import { Component, input } from '@angular/core';
import { Work } from '../../modules/models/works.model';

@Component({
  selector: 'app-works-card',
  standalone: true,
  imports: [],
  templateUrl: './works-card.component.html',
  styleUrl: './works-card.component.scss'
})
export class WorksCardComponent {

  public cardInfo = input.required<Work>();

}
