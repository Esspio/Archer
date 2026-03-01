import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { messages } from '../../utils/Messages_json';

@Component({
  selector: 'app-sem-registro',
  imports: [MatIcon],
  templateUrl: './sem-registro.html',
  styleUrl: './sem-registro.scss',
})
export class SemRegistro {
  mensagem = input.required<string>();
  isAdicionaMensagemVerifiqueNovamenteMaisTarde = input<boolean>();

  getMessageVerifiqueNovamenteMaisTarde(): string {
    return messages['verifique.novamente.mais.tarde'];
  }
}
