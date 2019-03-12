import { Component, OnInit } from '@angular/core';
import { PelisService } from 'src/app/services/pelis.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {


  buscar:string="";
  url:string="http://image.tmdb.org/t/p/w300/";

  constructor( public _ps:PelisService ) { 


  }

  ngOnInit() {
  }


  buscarPeli(){
    if( this.buscar.length == 0 ){
        return;
    }

    this._ps.buscarPelicula(this.buscar)
      .subscribe( data=>{ 
        console.log(data)
       } )

  }

}
