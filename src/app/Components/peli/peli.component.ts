import { PelisService } from './../../services/pelis.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peli',
  templateUrl: './peli.component.html',
  styles: []
})
export class PeliComponent implements OnInit {
peliculas:any;
buscar;

  constructor( private _ps:PelisService, 
                private router:ActivatedRoute ) {  

    this.router.params.subscribe( params=>{ 
      console.log(params);
    
     } )

   }


  ngOnInit() {
  }

}
