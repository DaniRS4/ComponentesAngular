import { Component } from '@angular/core';

import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaNoticiasComponent } from './components/lista-noticias/lista-noticias.component';
import { INoticia } from './interfaces/inoticia.interface';

@Component({
  selector: 'app-root',
  imports: [FormularioComponent, ListaNoticiasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'BlogNoticias';
  arrayNoticias: INoticia[] = [
    { titleNoticia: 'Comienza la temporada de gamusinos', dateNoticia: '14-01-2025', imageNoticia: 'images/vanidoso.jpg', textNoticia: 'There is nothing quite like a relaxing cup of café con leche in Plaza Mayor and a romantic dinner en el Madrid de los Austrias...' },
    { titleNoticia: 'El alcalde advierte: la aceituna baja', dateNoticia: '31-11-2024', imageNoticia: 'images/la aceituna baja.png', textNoticia: 'Es el vecino el que elige al alcalde y es el alcalde el que quiere que sean los vecinos el alcalde. Multiplícate por cero...' }
  ]


  getDataForm(event: INoticia){
    this.arrayNoticias = [... this.arrayNoticias, event];
  }
}
