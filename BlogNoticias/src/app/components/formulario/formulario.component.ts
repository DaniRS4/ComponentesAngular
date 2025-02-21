import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  newNoticia: INoticia = { titleNoticia: '', dateNoticia: '', imageNoticia: '', textNoticia: '' };
  @Output() sendNoticia: EventEmitter<INoticia> = new EventEmitter();

  getNoticia() {
    console.log(this.newNoticia)
    // quiero enviarlo al padre
    this.sendNoticia.emit(this.newNoticia);
    this.newNoticia = { titleNoticia: '', dateNoticia: '', imageNoticia: '', textNoticia: '' };
  }

  validar(){
    if (!this.newNoticia.titleNoticia || this.newNoticia.titleNoticia.trim() === '') {
        alert("Introduce un título para la noticia.");

    } else if (!this.newNoticia.textNoticia || this.newNoticia.textNoticia.trim() === '') {
      alert("Introduce contenido para la noticia.");

    }  else if(!this.newNoticia.dateNoticia || this.newNoticia.dateNoticia.trim() === '') {
      alert("Introduce la fecha de la noticia.");

    }  else if(!this.newNoticia.imageNoticia || this.newNoticia.imageNoticia.trim() === '') {
      alert("Introduce una imagen.");
    } else {
        this.getNoticia();
    }
  }

  
  CapturarImagen(event: any) {
    console.log(event);
    const file = event.target.files[0]; 
    if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file); 
        reader.onload = () => {
            this.newNoticia.imageNoticia = reader.result as string; 
        };
    }
}
}
