import { Routes } from '@angular/router';
// import AppComponent from './app.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
        // loadComponent: () => import('./app.component'),
        
    },
    {
        path: 'home',
        loadComponent: () => import('./layout/main/main.component'),
    },
    {
        path: 'works/:title', 
        loadComponent: () => import('./modules/works/works-detail/works-detail.component')
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
    
];
