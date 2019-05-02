import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../mascota.service';

@Component({
  selector: 'app-borrar-mascota',
  templateUrl: './borrar-mascota.component.html',
  styleUrls: ['./borrar-mascota.component.css']
})
export class BorrarMascotaComponent implements OnInit {
  
  constructor(private servicio:MascotaService) { }
  borrar(id:string): void{
  this.servicio.borrarMascota(id).subscribe();
  }
  ngOnInit() {
  }

}
