import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-secciones',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './secciones.component.html',
  styleUrl: './secciones.component.css'
})
export class SeccionesComponent {
  openMenu: boolean = false;
  toggleMenu(){
    this.openMenu = !this.openMenu;
  }
  constructor(private router: Router){ }
    goToZapatos(){
      this.router.navigate(['/zapatos']);
    }
  }

