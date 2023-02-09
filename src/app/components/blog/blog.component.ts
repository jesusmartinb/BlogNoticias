import { Component, Input } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  vacio: boolean = false;
  contador: number = 3;
  id: number = this.contador;
  titulo: string = "";
  autor: string = ""
  imagen: string = "";
  texto: string = "";
  fechaPubli: string = "";

  @Input() noticiasList: any[] = [];


  guardar(): void {
    if(this.titulo === "" || this.autor === "" || this.imagen === "" || this.texto === "" || this.fechaPubli === "") {
      this.vacio = true;

    } else {
      let noticia: Noticia = {
        id: this.contador,
        titulo: this.titulo,
        autor: this.autor,
        imagen: this.imagen,
        texto: this.texto,
        fechaPubli: this.fechaPubli
      }

      this.noticiasList.unshift(noticia);
      this.contador++;

      console.log(this.noticiasList);

      this.titulo = "";
      this.autor = "";
      this.imagen = "";
      this.texto = "";
      this.fechaPubli = "";
      this.vacio = false;

    }
  }

}
