import { Component, Inject } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-grid-item',
  imports: [NgComponentOutlet],
  templateUrl: './grid-item.html',
  styleUrl: './grid-item.scss',
})
export class GridItem {
  constructor(
    @Inject('gridTitle') public gridTitle: string,
    @Inject('gridContent') public gridContent: any,
  ) {}
}
