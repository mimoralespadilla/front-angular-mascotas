import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable,of } from 'rxjs';
import { mascota } from './mascota';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private mascotaURL='http://localhost:8080/mascotas/';

  createMascota(ma:mascota):Observable<mascota>{

    return this.http.post<mascota>(this.mascotaURL+'crear mascota/',ma)
    .pipe(
      catchError(this.handleError('createMascota',ma))
    )


  }
  getById(id: string): Observable<mascota[]>{
    return this.http.get<mascota[]>(this.mascotaURL+id)
      .pipe(
        tap(_=>console.log('fetched Error')),
        catchError(this.handleError<mascota[]>('getById',[]))
      )
  }
  getAllMascotas(): Observable<mascota[]>{
    return this.http.get<mascota[]>(this.mascotaURL)
      .pipe(
        tap( _=>console.log(_)),
        catchError(this.handleError<mascota[]>('getAllMascotas',[]))
      );
  }
  
  getByName(nombre: string): Observable<mascota[]>{
    this.http.get<mascota[]>(this.mascotaURL+'nombre/'+nombre)
    .pipe(
      tap(_=>console.log('fetched Error')),
      catchError(this.handleError<mascota[]>('getByName',[]))
    );
    return this.http.get<mascota[]>(this.mascotaURL+'nombre/'+nombre)
      .pipe(
        tap(_=>console.log(_)),
        catchError(this.handleError<mascota[]>('getByName',[]))
      )
  }

  getByEaM(especie:string,mezcla:string): Observable<mascota[]>{
    return this.http.get<mascota[]>(this.mascotaURL+'nombre y especie/'+especie+' y '+mezcla)
    .pipe(
      tap(_=>console.log(_)),
      catchError(this.handleError<mascota[]>('getByName',[]))
    )
  }

  borrarMascota(id:string): Observable<{}>{
    return this.http.delete(this.mascotaURL+'Borrar mascota/'+id)
    .pipe(
      catchError(this.handleError('borrarMascota'))
    );
  }
  
  constructor(private http:HttpClient) { }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
}
