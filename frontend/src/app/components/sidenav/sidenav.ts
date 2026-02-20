import { Component } from '@angular/core';
import { SidenavContentGroup } from '../sidenav-content-group/sidenav-content-group';
import { RouteEnum } from '../../utils/RouteEnum';
import { messages } from '../../utils/Messages_json';

@Component({
  selector: 'app-sidenav',
  imports: [SidenavContentGroup],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss',
})
export class Sidenav {
  public RouteEnum = RouteEnum;
  public messages = messages;
}
