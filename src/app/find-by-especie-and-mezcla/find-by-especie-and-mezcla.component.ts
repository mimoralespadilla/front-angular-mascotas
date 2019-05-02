import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../mascota.service';

@Component({
  selector: 'app-find-by-especie-and-mezcla',
  templateUrl: './find-by-especie-and-mezcla.component.html',
  styleUrls: ['./find-by-especie-and-mezcla.component.css']
})
export class FindByEspecieAndMezclaComponent implements OnInit {
  private mascota= [];

  constructor(private servicio:MascotaService) { }
  getEspecieAndMezcla(especie:string,mezcla:string): void{
    this.servicio.getByEaM(especie,mezcla)
    .subscribe(mascota=>this.mascota =mascota)
  }
  ngOnInit() {
  }

}
