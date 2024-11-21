import { Component, inject, input } from '@angular/core';
import { Work } from '../../modules/models/works.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-works-card',
  standalone: true,
  imports: [],
  templateUrl: './works-card.component.html',
  styleUrl: './works-card.component.scss'
})
export class WorksCardComponent {

  public cardInfo = input.required<Work>();

  private router = inject(Router);

  toMoreInfo(title: string){
    console.log(
      name
    );
    this.router.navigateByUrl(`/works/${title}`);
  }

}
