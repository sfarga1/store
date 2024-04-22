import { Component } from '@angular/core';
import { SeccionesComponent } from './secciones/secciones.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [SeccionesComponent],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
