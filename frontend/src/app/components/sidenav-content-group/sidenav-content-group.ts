import { RouteEnum, RouteValue } from './../../utils/RouteEnum';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Roteamento } from '../../utils/Roteamento';
import { Router } from '@angular/router';
import { messages } from '../../utils/Messages_json';

interface itemGrupo {
  icon: string;
  label: string;
  linkRef: RouteValue;
}

interface contentGroup {
  title: string;
  groupItemList: itemGrupo[];
}

@Component({
  selector: 'app-sidenav-content-group',
  imports: [CommonModule, MatIconModule],
  templateUrl: './sidenav-content-group.html',
  styleUrl: './sidenav-content-group.scss',
})
export class SidenavContentGroup extends Roteamento {
  contentGroupListLength = 0;

  constructor(router: Router) {
    super(router);
  }

  getContentGroupList(): contentGroup[] {
    const contentGroupList = [
      {
        title: messages['perfil'],
        groupItemList: [
          { icon: 'badge', label: messages['minha.conta'], linkRef: RouteEnum.MINHA_CONTA },
          {
            icon: 'lock_reset',
            label: messages['trocar.senha'],
            linkRef: RouteEnum.TROCAR_SENHA,
          },
        ],
      },

      {
        title: messages['aulas'],
        groupItemList: [
          {
            icon: 'calendar_month',
            label: messages['minha.agenda'],
            linkRef: RouteEnum.MINHA_AGENDA,
          },
          {
            icon: 'event_available',
            label: messages['agendar'],
            linkRef: RouteEnum.AGENDAR_AULA,
          },
          {
            icon: 'edit_calendar',
            label: messages['reagendar'],
            linkRef: RouteEnum.REAGENDAR_AULA,
          },
          {
            icon: 'content_paste_off',
            label: messages['cancelar'],
            linkRef: RouteEnum.CANCELAR_AULA,
          },
        ],
      },
      {
        title: messages['configuracoes'],
        groupItemList: [
          {
            icon: 'admin_panel_settings',
            label: messages['preferencias'],
            linkRef: RouteEnum.PREFERENCIAS_CONTA,
          },
          { icon: 'logout', label: messages['logout'], linkRef: RouteEnum.LOGOUT },
        ],
      },
    ];

    this.contentGroupListLength = contentGroupList.length;

    return contentGroupList;
  }

  onClick() {
    console.log('CLICOU');
  }
}
