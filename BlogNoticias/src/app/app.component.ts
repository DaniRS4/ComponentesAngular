import { Component } from '@angular/core';

import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaNoticiasComponent } from './components/lista-noticias/lista-noticias.component';

@Component({
  selector: 'app-root',
  imports: [ListaNoticiasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BlogNoticias';
}
