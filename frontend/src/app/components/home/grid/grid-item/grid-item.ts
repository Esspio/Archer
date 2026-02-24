import { Component, Inject, input } from '@angular/core';

@Component({
  selector: 'app-grid-item',
  imports: [],
  templateUrl: './grid-item.html',
  styleUrl: './grid-item.scss',
})
export class GridItem {
  constructor(@Inject('titulo') public titulo: string) {}
}
