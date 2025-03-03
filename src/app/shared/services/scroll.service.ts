import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  initialize(): void {
    // Manejar fragmentos de URL cuando cambie la navegación
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.activatedRoute.fragment.subscribe(fragment => {
        if (fragment) {
          // Dar tiempo para que el DOM se actualice antes de hacer scroll
          setTimeout(() => {
            this.scrollToElement(fragment);
          }, 100);
        } else {
          // Si no hay fragmento, ir al principio de la página
          window.scrollTo(0, 0);
        }
      });
    });
  }

  scrollToElement(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }

}
