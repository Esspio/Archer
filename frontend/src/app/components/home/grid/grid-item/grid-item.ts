import { messages } from './../../../../utils/Messages_json';
import { Component, input, Type } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { Title } from '../../../title/title';
import { SemRegistro } from '../../../sem-registro/sem-registro';

@Component({
  selector: 'app-grid-item',
  imports: [NgComponentOutlet, Title, SemRegistro],
  templateUrl: './grid-item.html',
  styleUrl: './grid-item.scss',
})
export class GridItem {
  gridTitle = input<string>();
  gridContent = input.required<Type<any>>();
  gridContentInputs = input<Record<string, any>[]>([]);
  messages = messages;

  SemRegistro = SemRegistro;
}
