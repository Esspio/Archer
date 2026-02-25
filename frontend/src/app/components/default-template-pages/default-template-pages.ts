import { Component, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { Sidenav } from '../sidenav/sidenav';
import { messages } from '../../utils/Messages_json';
import { Title } from '../title/title';

@Component({
  selector: 'app-default-template-pages',
  imports: [RouterOutlet, MatSidenavModule, MatButtonModule, Sidenav, Title],
  templateUrl: './default-template-pages.html',
  styleUrl: './default-template-pages.scss',
})
export class DefaultTemplatePages {
  pageName = signal<string>('');
  personName = signal<string>('');

  onActivate(instanciaComponent: any) {
    if (instanciaComponent?.pageTitle?.subscribe) {
      instanciaComponent.pageTitle.subscribe((pageName: string) => {
        this.pageName.set(pageName);
      });
    }
  }

  getMensagemBemVindoFormatada(): string {
    return (
      messages['bem.vindo.person.name'].replace('{0}', this.personName()) +
      ' ' +
      this.getDataAtualFormatada()
    );
  }

  getDataAtualFormatada(): string {
    const dateFormatOptions: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'America/Sao_Paulo',
    };

    return messages['hoje.e.data'].replace(
      '{0}',
      new Date().toLocaleString('pt-BR', dateFormatOptions),
    );
  }

  ngOnInit() {
    const userData = JSON.parse(sessionStorage.getItem('userData') ?? '');
    this.personName.set(userData?.personName ?? '');
  }
}
