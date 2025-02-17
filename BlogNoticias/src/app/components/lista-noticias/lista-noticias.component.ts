import { Component, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-lista-noticias',
  imports: [],
  templateUrl: './lista-noticias.component.html',
  styleUrl: './lista-noticias.component.css'
})
export class ListaNoticiasComponent {
  @Input() misNoticias: INoticia[] = []

  ngOnInit(){
    console.log(this.misNoticias)
  }
}
