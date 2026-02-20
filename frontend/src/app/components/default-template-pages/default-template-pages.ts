import { Component } from '@angular/core';
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
export class DefaultTemplatePages {}
