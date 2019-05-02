import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../mascota.service';
import { mascota } from '../mascota';

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit {
  private mascota = [];
  constructor(private servicio:MascotaService) { }
  create(nombreMascota:string, especieMascota:string,mezclaMascota:string,edadMascota:number,newMascota:mascota): void{
    newMascota={
      name:nombreMascota,
      mezcla:mezclaMascota,
      especie:especieMascota,
      edad: edadMascota
    }
    this.servicio.createMascota(newMascota)
    .subscribe(mascota=>this.mascota.push(mascota))
  }
  ngOnInit() {
  }

}
