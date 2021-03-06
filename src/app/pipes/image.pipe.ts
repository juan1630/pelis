import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {



  transform(pelicula: any): any {


    let url  = "http://image.tmdb.org/t/p/w500/";

    
      if(  pelicula.backdrop_path ){
          return  url + pelicula.backdrop_path;
      }else{ 
        if( pelicula.poster_path ){
          return  url + pelicula.poster_path;
        }else{
          return "assets/img/no-image.png";
        }
      }


  }

}
