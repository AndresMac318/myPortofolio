import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  //@ViewChild("navbar", {static: true}) navbar!: ElementRef;
  
  navActive: boolean = false;
  
  get toggle(){
    console.log(this.navActive);
    
    return (this.navActive) ? 'nav__menu--active' : 'nav__menu';
  }

  constructor(){
    //this.checkScreenWidth();
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
