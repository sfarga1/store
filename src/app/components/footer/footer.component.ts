import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  copyrightYear: number = 2024;
  companyName: string = '© Sergi Farga';
  rightsReserved: string = 'Todos los derechos reservados';
}
