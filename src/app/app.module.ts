import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { SearchComponent } from './Components/search/search.component';
import { FormsModule } from '@angular/forms'


import { RouterModule } from '@angular/router';

import { ROUTES } from 'src/app/routes';
import { PeliComponent } from './Components/peli/peli.component';
import { TarjetaComponent } from './Components/tarjeta/tarjeta.component';

//  pipes

import { ImagePipe } from './pipes/image.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SearchComponent,
    PeliComponent,
    TarjetaComponent,
    ImagePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot( ROUTES, { useHash:false } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
