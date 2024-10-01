// src/app/components/clients/clients.component.ts
import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { listaclientes } from '../interfaces/clientes.interface';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.component.html',  
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clientList: listaclientes[] = []; // Inicializa la lista de clientes

  constructor(private _clientService: ClientsService, private cd: ChangeDetectorRef) {}


  clientes =  signal <any |undefined>(undefined)
  ngOnInit(): void {
    this.getClients(); 
  }

  getClients(): void {
    this._clientService.getClients().subscribe({
      next: (result) => {
        console.log('Respuesta completa:', result); // Imprime toda la respuesta
        this.clientList = result.clientes; // Asigna los datos a clientList
        console.log('Lista de clientes asignada:', this.clientList); // Verifica la lista asignada
        this.cd.detectChanges(); // Forzar la actualización de la vista

      },
      error: (err) => {
        console.log('Error al obtener los clientes:', err);
      }
    });
  }
}
