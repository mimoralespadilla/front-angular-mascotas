import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../mascota.service';
import { mascota } from '../mascota';

@Component({
  selector: 'app-get-mascota-by-name',
  templateUrl: './get-mascota-by-name.component.html',
  styleUrls: ['./get-mascota-by-name.component.css']
})
export class GetMascotaByNameComponent implements OnInit {
   mascotaNombre = [];
  constructor(private servicio:MascotaService) { }
  getMascotaByName(nombre:string): void{
    this.servicio.getByName(nombre).subscribe(
      mascotaNombre => {
        this.mascotaNombre=mascotaNombre;
        console.log(mascotaNombre)}
    )
  }
  ngOnInit() {
  }
  
}
