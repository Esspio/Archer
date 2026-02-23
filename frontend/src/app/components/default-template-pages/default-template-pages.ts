import { Component, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { Sidenav } from '../sidenav/sidenav';

@Component({
  selector: 'app-default-template-pages',
  imports: [RouterOutlet, MatSidenavModule, MatButtonModule, Sidenav],
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

  ngOnInit() {
    const userData = JSON.parse(sessionStorage.getItem('userData') ?? '');
    this.personName.set(userData?.personName ?? '');
  }
}
