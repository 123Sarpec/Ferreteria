import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule si usas [(ngModel)]
import { HttpClientModule } from '@angular/common/http'; // Importar si haces peticiones HTTP
import { ClientsComponent } from './clients.component';
import { AddClientComponent } from './add-client/add-client.component';

describe('ClientsComponent', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,    // Importar FormsModule para el uso de [(ngModel)]
        HttpClientModule, // Importar si haces solicitudes HTTP
      ],
      declarations: [ 
        ClientsComponent,
        AddClientComponent // Asegúrate de declarar el componente si lo usas aquí
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detectar cambios iniciales
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verificar que el componente se creó correctamente
  });

  // Puedes agregar más pruebas aquí, por ejemplo:
  it('should have a defined clients property', () => {
    expect(component.clientes).toBeDefined(); // Verificar que la propiedad 'clients' está definida
  });
});
