import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tecnico } from '../models/tecnico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Tecnico[]>{
    return this.http.get<Tecnico[]>('/tecnicos');
  }

  create(tecnico : Tecnico): Observable<Tecnico>{
    return this.http.post<Tecnico>('/tecnicos', tecnico);
  }

  findById(id: any): Observable<Tecnico>{
    return this.http.get<Tecnico>(`/tecnicos/${id}`);
  }

  update(tecnico: Tecnico): Observable<Tecnico>{
    return this.http.put<Tecnico>(`/tecnicos/${tecnico.id}`, tecnico);
  }
}
