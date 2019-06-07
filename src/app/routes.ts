import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';


export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'movies', component: MovieListComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
