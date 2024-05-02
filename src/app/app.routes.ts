import { Routes } from '@angular/router';
import { ZapatosComponent } from './components/zapatos/zapatos.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
    {path: '', component: ContenidoComponent},
    {path: 'zapatos', component: ZapatosComponent},
    {path: 'admin', component: AdminComponent}
];
