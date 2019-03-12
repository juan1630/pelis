import { Component, OnInit, Input } from '@angular/core';
import { PelisService } from 'src/app/services/pelis.service';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent implements OnInit {

  peliculas:any[]=[];
  pelicula:any[]=[];
  kids:any[]=[];
  populate:any[]=[];

  constructor( private _ps:PelisService,
              private router:Router   ) {  
    
    this._ps.peliculasHome()
        .subscribe( (data:any) =>{  
          this.peliculas=data.results;
        })

        
      this._ps.getPelisKids()
      .subscribe( (data:any)=>{ 
          this.kids=data.results;
          console.log(this.kids)
        })

        this._ps.getPopular().subscribe( (data:any)=>{ 
          
              this.populate=data.results;
              console.log(this.populate)
            })
        

  }

  ngOnInit() {


  }

}
