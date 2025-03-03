import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from './layout/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ScrollService } from './shared/services/scroll.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    TranslateModule,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export default class AppComponent implements OnInit {
  title = 'myportfolio';

  constructor( 
    private translateSvc: TranslateService,
    private scrollSvc: ScrollService
  ){
    const langDefaultBrowser = this.translateSvc.getBrowserLang();
    if(langDefaultBrowser !== undefined){
      this.translateSvc.setDefaultLang(langDefaultBrowser);
    }
  }

  ngOnInit(): void {
    this.scrollSvc.initialize();
  }
}
