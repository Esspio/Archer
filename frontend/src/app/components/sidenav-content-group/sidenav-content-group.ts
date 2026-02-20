import { RouteValue } from './../../utils/RouteEnum';
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Roteamento } from '../../utils/Roteamento';
import { Router } from '@angular/router';

interface itemGrupo {
  icon: string;
  label: string;
  linkRef: RouteValue;
}

@Component({
  selector: 'app-sidenav-content-group',
  imports: [CommonModule, MatIconModule],
  templateUrl: './sidenav-content-group.html',
  styleUrl: './sidenav-content-group.scss',
})
export class SidenavContentGroup extends Roteamento {
  tituloGrupo = input.required<string>();
  itemGrupoList = input.required<itemGrupo[]>();

  constructor(router: Router) {
    super(router);
  }

  onClick() {
    console.log('CLICOU');
  }
}
