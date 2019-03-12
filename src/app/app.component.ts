import { Component } from '@angular/core';
import { PelisService } from 'src/app/services/pelis.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pelisApp';

  constructor( public _ps:PelisService ){
    this._ps.getPopular()
    .subscribe( data=>{ console.log( data ) } )
  }

}
