import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./modules/home/home.component'),
    },
    {
        path: 'works', 
        loadComponent: () => import('./modules/works/works.component')
    },
    {
        path: 'resume', 
        loadComponent: () => import('./modules/resume/resume.component')
    },
    {
        path: 'skills', 
        loadComponent: () => import('./modules/skills/skills.component')
    },
    {
        path: 'contact', 
        loadComponent: () => import('./modules/contact/contact.component')
    },
    {
        path: '',
        redirectTo: 'portfolio',
        pathMatch: 'full'
    }
    
];
