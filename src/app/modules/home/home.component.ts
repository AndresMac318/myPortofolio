import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import WorksComponent from '../works/works.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    WorksComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {}
