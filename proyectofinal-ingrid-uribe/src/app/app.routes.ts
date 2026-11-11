import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { NotFound } from './pages/not-found/not-found';
import { Contacto } from './pages/contacto/contacto';
import { Productos } from './pages/productos/productos';
import { Nosotros } from './pages/nosotros/nosotros';
import { Variedad } from './pages/variedad/variedad';

export const routes: Routes = [
    { path: '', component: Inicio},
    { path: 'inicio', component: Inicio},
    { path: 'galeria', component: Productos},
    { path: 'variedad', component: Variedad},
    { path: 'nosotros', component: Nosotros},
    { path: 'contacto', component: Contacto},
    { path: '**', component: NotFound},

    
];
