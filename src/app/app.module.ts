import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllMascotasComponent } from './all-mascotas/all-mascotas.component';
import {HttpClientModule} from '@angular/common/http';
import { GetByIdComponent } from './get-by-id/get-by-id.component';
import { GetMascotaByNameComponent } from './get-mascota-by-name/get-mascota-by-name.component';
import { FindByEspecieAndMezclaComponent } from './find-by-especie-and-mezcla/find-by-especie-and-mezcla.component';
import { CrearMascotaComponent } from './crear-mascota/crear-mascota.component';
import { BorrarMascotaComponent } from './borrar-mascota/borrar-mascota.component';

@NgModule({
  declarations: [
    AppComponent,
    AllMascotasComponent,
    GetByIdComponent,
    GetMascotaByNameComponent,
    FindByEspecieAndMezclaComponent,
    CrearMascotaComponent,
    BorrarMascotaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
