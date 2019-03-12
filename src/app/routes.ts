import { Routes } from '@angular/router';
import { HomeComponent } from '../app/Components/home/home.component';
import { SearchComponent } from '../app/Components/search/search.component';
import { PeliComponent } from 'src/app/Components/peli/peli.component';

export const ROUTES:Routes =[
    { path:'home', component:HomeComponent },
    { path:'search', component:SearchComponent },
    { path:'peli/:id', component:PeliComponent },
    { path:'**', pathMatch:'full', redirectTo:'home' }
]