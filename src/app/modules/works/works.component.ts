import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Work } from '../../core/models/works.model';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { WorksCardComponent } from '../../shared/components/works-card/works-card.component';

interface MenuItem {
  id: string;
  name: string;
  isActive: boolean;
}

interface MenuItemRaw {
  id: string;
  name: string;
  isActive: string;
}


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
export default class WorksComponent implements OnInit, AfterViewInit {

  public works: Work[] = [];
  
  public worksFilter: Work[] = this.works;

  public menuItems: MenuItem[] = [];

  constructor(private translateSvc: TranslateService){
    this.translateSvc.onLangChange.subscribe(() => this.chargeWorksList());
    this.chargeWorksList();
  }

  ngOnInit(): void {
    this.translateSvc.get('WORKS.menu').subscribe(res => {
      this.menuItems = Object.values(res).map(item => {
        const menuItem = item as MenuItemRaw;
        return {
          ...menuItem,
          isActive: menuItem.isActive === 'true'
        } as MenuItem;
      });
    });
  }

  ngAfterViewInit(): void {
    this.filterworks('All');
  }

  chargeWorksList(){
    this.translateSvc.get("WORKS.list").subscribe(res=>{
      this.works = Object.values(res);
      this.worksFilter = this.works;
    });
  }

  filterworks(term?: string){
    this.menuItems = this.menuItems.map(item => ({
      ...item,
      isActive: item.name === term
    }));
    
    if (term==='All') {
      return this.worksFilter = this.works;
    }
    return this.worksFilter = this.works.filter((filter) => filter.category === term);
  }
}
