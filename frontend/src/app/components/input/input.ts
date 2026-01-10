import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './input.html',
  styleUrl: './input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Input {
  type = input.required<string>();
  name = input.required<string>();
  label = input.required<string>();
  placeholder = input.required<string>();
  icon = input.required<string>();

  //Analisar motivo pelo qual nao esta vindo com o valor do front
  botaoExibirSenha = signal<boolean>(false);

  clickShowPassword(event: Event) {
    console.log(this.botaoExibirSenha());
    this.botaoExibirSenha.set(!this.botaoExibirSenha());
    event.stopPropagation();
  }
}
