// src/app/services/clients.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listaclientes } from '../interfaces/clientes.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private apiUrl = 'https://ferreteria-api.onrender.com/api/v3/cliente/findall'; 

  constructor(private http: HttpClient) {}

  getClients(): Observable<{ clientes: listaclientes[] }> {
    return this.http.get<{ clientes: listaclientes[] }>(this.apiUrl);
  }
}
