import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    TranslatePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HomeComponent {

  public currentLang: string = '';

  constructor(private translateSvc: TranslateService, private router: Router ){
    this.currentLang = this.translateSvc.currentLang;
    this.translateSvc.onLangChange.subscribe(() => this.getCV());
  }

  getCV(){
    if (this.translateSvc.currentLang === 'es') {
      return '/../../../assets/docs/CV - LUIS ANDRES MACEA_ES.pdf';
    }else{
      return '/../../../assets/docs/CV - LUIS ANDRES MACEA_EN.pdf';
    }
  }

  downloadCV(){    
    const fileUrl = this.getCV();
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'CV - Luis Andres Macea.pdf';
    link.click();
    link.remove();
  }
}
