import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PelisService {


  private apiKey:string = "f7318215449432d83fd707dce125fe31";
  private urlMovie:string="https://api.themoviedb.org/3";
  peliculas:any[]=[];

  constructor( private http: HttpClient ) {  }


   getPopular(){
     let url= `${this.urlMovie}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}`;

     return this.http.get(url).pipe( map( res=> res ))
      

   }

   buscarPelicula( pelicula:string ){
     console.log( pelicula )
     let url = `${this.urlMovie}/search/movie?query=${pelicula}&sort_by=popularity.desc&api_key=${ this.apiKey}`;
      return this.http.get( url )
          .pipe( map( (res:any)=> {
            this.peliculas=res.results;
            console.log(this.peliculas);
            return res;
           } ));

   }

   peliculasHome(){
     let date= new Date;
     let day= date.getDate();

     let month=date.getMonth();
     let year=date.getFullYear();
     
     let url = `${this.urlMovie}/discover/movie?primary_release_date.gte=${year}-${month}-${day}&primary_release_date.lte=${year}-${month+1 }-${ day+9 }&api_key=${this.apiKey}`

     return this.http.get(url)
            .pipe( map(res=> res ))

    }
    getPelisKids(){
      let url= `${this.urlMovie}/discover/movie?primary_release_year=2010&sort_by=vote_average.desc&api_key=${this.apiKey}`;

      return this.http.get( url )
          .pipe( map( data=> data ) )

    }

}
