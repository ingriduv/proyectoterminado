import { Component } from '@angular/core';
import { Productos } from '../../models/productos';
import { ProductoCard } from '../../components/producto-card/producto-card';

@Component({
  imports: [ProductoCard],
  selector: 'app-variedad',
  styleUrl: './variedad.css',
  templateUrl: './variedad.html',
})
export class Variedad {
   criaturas: Productos[]= [
    {
      nombre: 'MANTARAYA',
      imagen: 'img/mantaraya.jpg',
      descripcion: ' es la especie de raya más grande del mundo y un pez cartilaginoso emparentado con los tiburones',
      informacion: 'Pelagia noctiluca, también llamada acalefo luminiscente o clavel de mar. Es una especie de medusa escifozoa capaz de emitir luz cuando es estimulada por el movimiento del agua.'
    },
    {
      nombre: 'BALLENA AZUL',
      imagen: 'img/ballena_azul.jpg',
      descripcion: 'ballena azul  es el animal más grande del planeta, con un cuerpo alargado de color gris azulado  ',
      informacion: ' posee un cuerpo largo y estilizado, con el dorso de color gris azulado y la zona ventral más clara, a veces con tonos moteados..'
    },
    {
      nombre: 'PEZ LEON',
      imagen: 'img/pteoris.jpg',
      descripcion: ' pez marino venenoso perteneciente a la familia Scorpaenidae venenoso originario del océano Índico',
      informacion: ' es un molusco cefalópodo de la familia Octopodidae, caracterizado por tener ocho brazos con ventosas, una cabeza grande y un cuerpo flexible que puede cambiar de color y textura para camuflarse con su entorno'
    },
    {
      nombre: 'CABALLITO DE MAR',
      imagen: 'img/caballito.png',
      descripcion: 'es un pequeño pez marino óseo que destaca por su postura erguida, su cabeza parecida a un caballo',
      informacion: ' es un molusco cefalópodo de la familia Octopodidae, caracterizado por tener ocho brazos con ventosas, una cabeza grande y un cuerpo flexible que puede cambiar de color y textura para camuflarse con su entorno'
    },
    {
      nombre: 'PEZ PAYASO',
      imagen: 'img/pezpayaso.png',
      descripcion: 'El pez payaso es un pequeño pez marino famoso por sus colores y su vida en simbiosis con las anémonas',
      informacion: ' es un molusco cefalópodo de la familia Octopodidae, caracterizado por tener ocho brazos con ventosas, una cabeza grande y un cuerpo flexible que puede cambiar de color y textura para camuflarse con su entorno'
    },
     {
      nombre: 'DRAGON FOLICEO',
      imagen: 'img/dragonfoliceo.png',
      descripcion: 'pez marino emparentado con los caballitos de mar y los peces pipa, caracterizado por forma de hoja',
      informacion: ' es un molusco cefalópodo de la familia Octopodidae, caracterizado por tener ocho brazos con ventosas, una cabeza grande y un cuerpo flexible que puede cambiar de color y textura para camuflarse con su entorno'
    },
     {
      nombre: 'CONEJO DE MAR',
      imagen: 'img/conejodemar.jpg',
      descripcion:  'diminuta especie de babosa marina un molusco gasterópodo  parecido con un conejo de peluche',
      informacion: ' es un molusco cefalópodo de la familia Octopodidae, caracterizado por tener ocho brazos con ventosas, una cabeza grande y un cuerpo flexible que puede cambiar de color y textura para camuflarse con su entorno'
    },
    
     {
      nombre: 'TORTUGA',
      imagen: 'img/tortuga.jpg',
      descripcion: 'reptiles marinos que habitan los océanos del mundo desde hace más de 100 millones de años',
      informacion: ' es un molusco cefalópodo de la familia Octopodidae, caracterizado por tener ocho brazos con ventosas, una cabeza grande y un cuerpo flexible que puede cambiar de color y textura para camuflarse con su entorno'
    },

  ];

}
