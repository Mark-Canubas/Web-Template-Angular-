import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-layout',
  imports: [PanelMenuModule, RouterOutlet],
  templateUrl: './layout.html',
})
export class Layout {
  navItems = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
    },
    {
      label: 'Profile',
      icon: 'pi pi-fw pi-user',
    },
    {
      label: 'Settings',
      icon: 'pi pi-fw pi-cog',
    },
  ];
}
