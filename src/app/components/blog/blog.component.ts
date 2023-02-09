import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() idEnviado: EventEmitter<number>;
  @Output() tituloEnviado: EventEmitter<string>;
  @Output() autorEnviado: EventEmitter<string>;
  @Output() imagenEnviado: EventEmitter<string>;
  @Output() textoEnviado: EventEmitter<string>;
  @Output() fechaPubliEnviado: EventEmitter<string>;

  constructor() {
    this.idEnviado = new EventEmitter();
    this.tituloEnviado = new EventEmitter();
    this.autorEnviado = new EventEmitter();
    this.imagenEnviado = new EventEmitter();
    this.textoEnviado = new EventEmitter();
    this.fechaPubliEnviado = new EventEmitter();
  }


  guardar(): void {
    this.idEnviado.emit(this.id);
    this.tituloEnviado.emit(this.titulo);
    this.autorEnviado.emit(this.autor);
    this.imagenEnviado.emit(this.imagen);
    this.textoEnviado.emit(this.texto);
    this.fechaPubliEnviado.emit(this.fechaPubli);

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

      this.titulo = "";
      this.autor = "";
      this.imagen = "";
      this.texto = "";
      this.fechaPubli = "";
      this.vacio = false;

    }

  }

}
