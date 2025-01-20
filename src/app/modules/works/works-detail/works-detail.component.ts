import { Component, inject, Input, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Work } from '../../models/works.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-works-detail',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './works-detail.component.html',
  styleUrl: './works-detail.component.scss'
})
export default class WorksDetailComponent implements OnInit {

  public work!: Work;

  @Input('title') title!:string;

  private translateSvc = inject(TranslateService);
  private location = inject(Location);

  ngOnInit(): void {
    this.chargeWorkInfo();
    this.translateSvc.onLangChange.subscribe(() => this.chargeWorkInfo());
  }

  prevNavigation(){
    this.location.back();
  }

  chargeWorkInfo(){
    this.translateSvc.get("WORKS.list").subscribe(res => {
      const works: Work[] = Object.values(res);
      const work = works.find((work: Work) => work.title === this.title); 
      if (work) {
        this.work = work;
      }
    });   
  }
}
