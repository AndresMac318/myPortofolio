import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { WorksCardComponent } from '../../shared/works-card/works-card.component';
import { Work } from '../models/works.model';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [
    WorksCardComponent,
    TranslatePipe
  ],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export default class WorksComponent implements AfterViewInit {

  @ViewChild('angButton') angButton!: ElementRef<HTMLButtonElement>;

  public works: Work[] = [];
  
  public worksFilter: Work[] = this.works;

  constructor(private translateSvc: TranslateService){
    this.translateSvc.onLangChange.subscribe(() => this.chargeWorksList());
    this.chargeWorksList();
  }

  ngAfterViewInit(): void {
    const btn = this.angButton.nativeElement;
    btn.click();
    btn.focus();
  }

  chargeWorksList(){
    this.translateSvc.get("WORKS.list").subscribe(res=>{
      this.works = Object.values(res);
      this.worksFilter = this.works;
    });
  }

  filterworks(term?: string){
    if (term==='all') {
      return this.worksFilter = this.works;
    }
    return this.worksFilter = this.works.filter((filter) => filter.category === term);
  }
}
