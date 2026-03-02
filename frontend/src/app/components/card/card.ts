import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  titulo = input<string>();
  subTitulo = input<string>();
  exibeBotao = input<boolean>();
  labelBotao = input<string>();
  contentHtml = input<string>();
}
