import { Component, OnInit } from '@angular/core';
import {MascotaService} from '../mascota.service'

@Component({
  selector: 'app-all-mascotas',
  templateUrl: './all-mascotas.component.html',
  styleUrls: ['./all-mascotas.component.css']
})
export class AllMascotasComponent implements OnInit {
  private mascota = []; 

  constructor(private servicio:MascotaService) { }


  getMascotas(): void{
    this.servicio.getAllMascotas()
    .subscribe(mascota => this.mascota = mascota);
  }
  ngOnInit() {
  }


}
