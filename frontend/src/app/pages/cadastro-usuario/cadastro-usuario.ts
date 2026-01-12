import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Input } from '../../components/input/input';
import { email, form, maxLength, minLength, required, validate } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ButtonToggleCustom } from '../../components/button-toggle-custom/button-toggle-custom';
import { MatButtonModule } from '@angular/material/button';

interface CadastroUsuarioForm {
  nome: string;
  dataNascimento: string;
  email: string;
  login: string;
  senha: string;
  confirmeSenha: string;
}

@Component({
  selector: 'app-cadastro-usuario',
  imports: [Input, MatFormFieldModule, ButtonToggleCustom, MatButtonModule],
  templateUrl: './cadastro-usuario.html',
  styleUrl: './cadastro-usuario.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CadastroUsuario {
  cadastroUsuarioForm = signal<CadastroUsuarioForm>({
    nome: '',
    dataNascimento: '',
    email: '',
    login: '',
    senha: '',
    confirmeSenha: '',
  });

  form = form(this.cadastroUsuarioForm, (v) => {
    required(v.nome);
    minLength(v.nome, 5);
    maxLength(v.nome, 50);
    required(v.dataNascimento);
    validate(v.dataNascimento, (dataNascimentoContext) => {
      const dataNascimento = dataNascimentoContext.value();

      if (this.isPadraoValidoDDMMYYYY(dataNascimento)) {
        return null;
      }

      return { kind: 'dateMismatch', message: 'Data inválida' };
    });
    required(v.email);
    email(v.email);
    required(v.login);
    required(v.senha);
    minLength(v.senha, 8);
    minLength(v.confirmeSenha, 8);
    validate(v.confirmeSenha, (confirmeSenhaContext) => {
      const confirmeSenha = confirmeSenhaContext.value;
      const senha = confirmeSenhaContext.valueOf(v.senha);

      if (confirmeSenha() === senha) {
        return null;
      }

      return { kind: 'passwordMismatch', message: 'Senha não são iguais' };
    });
  });

  updateFormValue(event: any) {}

  isPadraoValidoDDMMYYYY(data: string): boolean {
    const m = data.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!m) return false;

    const d = +m[1],
      mo = +m[2] - 1,
      y = +m[3];
    const dt = new Date(y, mo, d);

    return dt.getFullYear() === y && dt.getMonth() === mo && dt.getDate() === d;
  }
}
