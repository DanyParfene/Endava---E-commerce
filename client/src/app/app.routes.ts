import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { LoginPage } from './pages/login-page/login-page';
import { RegisterPage } from './pages/register-page/register-page';

export const routes: Routes = [
    { path: '', component: Landing },
    { path: 'login', component: LoginPage },
    { path: 'register', component: RegisterPage },
];
