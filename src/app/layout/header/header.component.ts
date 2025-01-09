import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    TranslatePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  //@ViewChild("navbar", {static: true}) navbar!: ElementRef;

  locales = [
    { value: 'es', name: 'ES' },
    { value: 'en', name: 'EN' },
  ]
  
  navActive: boolean = false;
  
  get toggle(){
    console.log(this.navActive);
    
    return (this.navActive) ? 'nav__menu--active' : 'nav__menu';
  }

  constructor(private translateSvc: TranslateService){
    this.translateSvc.use('es');
    //this.checkScreenWidth();
  }

  changeLanguage(event: Event){
    if(event.target){
      const changeEvent = event.target as HTMLInputElement;
      this.translateSvc.use(changeEvent.value);
    }
  }
   
  /* @HostListener('window:resize')
  onResize(){
    this.checkScreenWidth();
  } */
  
  /* checkScreenWidth(){
    console.log('checkScreenWidth');
    
    if(window.innerWidth >= 768){
      this.navActive = false;
    }
  } */

  public toggleMenu(){
    this.navActive = !this.navActive;    
  }
}
