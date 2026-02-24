import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-grid-item',
  imports: [],
  templateUrl: './grid-item.html',
  styleUrl: './grid-item.scss',
})
export class GridItem {
  titulo = signal<string>('Título');
}
