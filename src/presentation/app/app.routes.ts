import { Routes } from '@angular/router';
import { LoginPage } from '../pages/login/login.page';
import { HomePage } from '../pages/home/login.page';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginPage,
    },
    {
        path: 'home',
        component: HomePage,
    },
    {
        path: '**',
        redirectTo: 'login',
    }
];
