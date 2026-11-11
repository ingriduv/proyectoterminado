import { Component, Input } from '@angular/core';
import { Productos } from '../../models/productos';

@Component({
  imports: [],
  selector: 'app-producto-card',
  styleUrl: './producto-card.css',
  templateUrl: './producto-card.html',
})
export class ProductoCard {

    @Input() criatura!: Productos;

}
