import { Component } from '@angular/core';
import { WorksCardComponent } from '../../shared/works-card/works-card.component';
import { Work } from '../models/works.model';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [
    WorksCardComponent
  ],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export default class WorksComponent {

  public works: Work[] = [
    {
      id: 1,
      title: 'Maps App',
      category: 'Angular',
      description: 'Proyecto desarrollado en Angular integrando mapas con MapBox',
      urlImg: '/assets/img/angular-maps.png',
      repositoryLink: 'https://github.com/AndresMac318/Angular-Maps',
    },
    {
      id: 2,
      title: 'RankCV',
      category: 'SpringBoot',
      description: 'Proyecto pagina principal corporativa, participación en el equipo de trabajo.',
      urlImg: '/assets/img/angular-maps.png',
      repositoryLink: 'https://github.com/AndresMac318/Angular-Maps',
    },
    {
      id: 3,
      title: 'Innoversoft',
      category: 'Angular',
      description: 'Proyecto LandingPage corporativa, participación en el equipo de trabajo.',
      urlImg: '/assets/img/innoversoft-co.webp',
      repositoryLink: 'https://github.com/AndresMac318/Angular-Maps',
    },
  ];
  /* public worksFilter: Work[] = [
    {
      id: 1,
      title: 'Maps App',
      category: 'Angular',
      description: 'Proyecto desarrollado en Angular integrando mapas con MapBox',
      urlImg: '/assets/img/angular-maps.png',
      repositoryLink: 'https://github.com/AndresMac318/Angular-Maps',
    },
    {
      id: 2,
      title: 'RankCV',
      category: 'SpringBoot',
      description: 'Proyecto pagina principal corporativa, participación en el equipo de trabajo.',
      urlImg: '/assets/img/angular-maps.png',
      repositoryLink: 'https://github.com/AndresMac318/Angular-Maps',
    },
    {
      id: 3,
      title: 'Innoversoft',
      category: 'Angular',
      description: 'Proyecto LandingPage corporativa, participación en el equipo de trabajo.',
      urlImg: '/assets/img/innoversoft-co.webp',
      repositoryLink: 'https://github.com/AndresMac318/Angular-Maps',
    },
  ]; */

  public worksFilter: Work[] = this.works;

  filterworks(termino?: string){
    console.log('filter',termino);
    if (termino==='all') {
      return this.worksFilter = this.works;
      // return this.worksFilter = this.works;
    }
    return this.worksFilter = this.works.filter((filter) => filter.category === termino);
  }
}
