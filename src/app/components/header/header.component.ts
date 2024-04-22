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
  fargaClass: string = 'farga-blue';

  changeFargaClass(className: string): void {
    this.fargaClass = className;
  }

  // Función para cambiar aleatoriamente el color de Farga
  changeRandomFargaClass(): void {
    const colors = ['farga-blue', 'farga-red', 'farga-green'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    this.changeFargaClass(randomColor);
  }
}
