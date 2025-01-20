import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Work } from '../../modules/models/works.model';
import { Router } from '@angular/router';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-works-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ SlicePipe],
  templateUrl: './works-card.component.html',
  styleUrl: './works-card.component.scss'
})
export class WorksCardComponent {

  public cardInfo = input.required<Work>();

  private router = inject(Router);

  toMoreInfo(title: string){
    this.router.navigateByUrl(`/works/${title}`);
  }

}
