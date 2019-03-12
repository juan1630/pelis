import { Component, OnInit } from '@angular/core';
import { PelisService } from 'src/app/services/pelis.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: []
})
export class NavBarComponent implements OnInit {

  constructor( private _ps:PelisService ) {  

    //tengo que crear el servicio que me muestre las peliculas más populares 

   }

  ngOnInit() {


  }

}
