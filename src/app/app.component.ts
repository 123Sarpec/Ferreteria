import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientsComponent } from './components/clients.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClientsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboard';
}
