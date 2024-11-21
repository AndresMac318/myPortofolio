import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent,
    FooterComponent,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export default class AppComponent implements OnInit {
  title = 'myportfolio';

  constructor( private activatedRoute: ActivatedRoute ){}

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      if(fragment) this.jumpToSection(fragment);
    });
  }

  jumpToSection(section: string | null){
    if (section) {
      document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
    }
  }
}
