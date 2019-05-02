import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../mascota.service';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.css']
})
export class GetByIdComponent implements OnInit {
  private mascota = [];
  constructor(private servicio:MascotaService) { }
  //Llama al servicio de mascota para buscar por una ID
  getMascota(id: string): void{
    this.servicio.getById(id).subscribe(mascota => this.mascota = mascota)
  }
  ngOnInit() {
  }
  
} 
