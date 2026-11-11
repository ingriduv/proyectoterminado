import { Component } from '@angular/core';
import { ProductoCard } from '../../components/producto-card/producto-card';

@Component({
  imports: [],
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos {

  criaturas= [
    {
      nombre: 'Medusa luminosa',
      imagen: 'img/medusa_LUMINOSA.jpg',
      descripcion: ' una medusa bioluminiscente del Mediterráneo y Atlántico, conocida por su brillo en la oscuridad y por su picadura muy urticante',
      informacion: 'Pelagia noctiluca, también llamada acalefo luminiscente o clavel de mar. Es una especie de medusa escifozoa capaz de emitir luz cuando es estimulada por el movimiento del agua.'
    },
    {
      nombre: 'ballena azul',
      imagen: 'img/ballena_azul.jpg',
      descripcion: 'ballena azul  es el animal más grande del planeta, con un cuerpo alargado de color gris azulado y un peso que puede superar las 170 toneladas.',
      informacion: ' posee un cuerpo largo y estilizado, con el dorso de color gris azulado y la zona ventral más clara, a veces con tonos moteados..'
    },
    {
      nombre: 'Pulpo octopus',
      imagen: 'img/pulpo.webp',
      descripcion: 'Inteligente, curioso y experto en camuflaje. el pulpo común conocido como Octopus vulgaris.',
      informacion: ' es un molusco cefalópodo de la familia Octopodidae, caracterizado por tener ocho brazos con ventosas, una cabeza grande y un cuerpo flexible que puede cambiar de color y textura para camuflarse con su entorno'
    },
  ];

  criaturaSeleccionada: any = null;

  verInformacion(criatura: any) {
    this.criaturaSeleccionada = criatura;
  }

  cerrarInformacion() {
    this.criaturaSeleccionada = null;
  }
}


