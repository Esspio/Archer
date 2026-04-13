import { Component, EventEmitter, Output, signal } from '@angular/core';
import { RouteEnum, RouteValue } from '../../utils/RouteEnum';
import { Input } from '../../components/input/input';
import { Roteamento } from '../../utils/Roteamento';
import { Router } from '@angular/router';
import { form, required } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

interface AgendarAulaForm {
  dataAula: string;
}

@Component({
  selector: 'app-agendar-aula',
  providers: [provideNativeDateAdapter()],
  imports: [Input, MatFormFieldModule, MatInputModule, MatTimepickerModule],
  templateUrl: './agendar-aula.html',
  styleUrl: './agendar-aula.scss',
})
export class AgendarAula extends Roteamento {
  @Output() pageTitle = new EventEmitter<string>();

  public RouteEnum = RouteEnum;

  constructor(router: Router) {
    super(router);
  }

  agendarAulaForm = signal<AgendarAulaForm>({
    dataAula: '',
  });

  form = form(this.agendarAulaForm, (v) => {
    required(v.dataAula);
  });

  submit(event: Event) {
    event.preventDefault();

    this.navigateTo(RouteEnum.HOME);
  }

  navigateTo(rota: RouteValue): void {
    super.navigate(rota);
  }

  ngOnInit(): void {
    this.pageTitle.emit(RouteEnum.AGENDAR_AULA.pageName);
  }
}
