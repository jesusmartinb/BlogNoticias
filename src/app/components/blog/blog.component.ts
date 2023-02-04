import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  id: number = 0;
  titulo: string = "";
  imagen: string = "";
  texto: string = "";
  fechaPubli: string = "";
  listNews: any[] = [
    {
      id: 1,
      titulo: "Así puedes poner en marcha tu negocio en tiempo récord",
      imagen: "./assets/images/imagen01.jpg",
      texto: "<p>Muchas veces asociamos la puesta en marcha de un negocio con un proceso que se dilata mucho en el tiempo. Es cierto que algunos proyectos requieren de mucho tiempo de preparación y es necesario prestarles toda la atención que necesitan para que salgan bien. Sin embargo, también hay ideas emprendedoras que puedan estar listas en muy poco tiempo.</p><p>En los últimos meses hemos visto mucho ejemplos. La pandemia ha obligado a agudizar el ingenio y en poco tiempo han surgido muchas empresas relacionadas de una forma u otra con productos y servicios que ahora mismo son esenciales: desde negocios especializados en importación de mascarillas a servicios de canguro que se encargan de cuidar a los niños si estos tienen que hacer cuarentena y sus padres están trabajando. Vamos a ver qué podemos hacer para tener un negocio en marcha lo antes posible.</p>",
      fechaPubli: "3-2-2023"
    },
    {
      id: 2,
      titulo: "La Fórmula 1 anuncia su calendario para 2023",
      imagen: "./assets/images/imagen02.jpeg",
      texto: "<p>La Fórmula 1 anunció este martes el <strong>calendario provisional para la temporada 2023</strong>, con 23 Grandes Premios.</p><p>La temporada arrancará el <strong>21 de marzo en Melbourne (Australia) y concluirá el 5 de diciembre en Abu Dabi</strong>.</p><p>El Mundial de Fórmula Uno también visitará Baréin, China, España, Mónaco, Azerbaiyán, Canadá, Francia, Austria, Reino Unido, Hungría, Bélgica, Países Bajos, Italia, Rusia, Singapur, Japón, Estados Unidos, México, Brasil y Arabia Saudí.</p><p>Queda <strong>por determinar dónde se disputará el cuarto Gran Premio de la temporada</strong>, cuya carrera se celebrará el 25 de abril.</p><p>El calendario provisional de la Fórmula 1 para 2023, junto con los de los campeonatos de la FIA Fórmula 2 y la Fórmula 3, queda <strong>sujeto a la aprobación del Consejo Mundial de Deportes de Motor de la Federación Internacional de Automovilismo</strong>.</p>",
      fechaPubli: "31-1-2023"
    }
  ];

  guardar(): void {
    let noticia = {
      id: this.listNews.length + 1,
      titulo: this.titulo,
      imagen: `./assets/images/${this.imagen}`,
      texto: this.texto,
      fechaPubli: this.fechaPubli
    }

    this.listNews.push(noticia);

    console.log(this.listNews);

    this.titulo = "";
    this.imagen = "";
    this.texto = "";
    this.fechaPubli = "";
  }

}
