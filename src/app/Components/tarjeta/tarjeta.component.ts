import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: []
})
//input envia data al componente de afuera hacia adentro

export class TarjetaComponent implements OnInit {
  @Input() pelis:any[]=[];

  url:string="http://image.tmdb.org/t/p/w300/";

  constructor() { }

  ngOnInit() {
  }

}
