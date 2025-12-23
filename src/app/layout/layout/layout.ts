import { Component, HostListener } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-layout',
  imports: [CommonModule, ButtonModule, RouterModule, PanelMenuModule],
  templateUrl: './layout.html',
})
export class Layout {
  sidebarOpen = false;
  buttonHovered = false;

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: ['/home']
    },
    {
      label: 'Profile',
      icon: 'pi pi-user',
      routerLink: ['/profile']
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog',
      items: [
        {
          label: 'Account',
          icon: 'pi pi-user-edit',
          routerLink: ['/settings/account']
        },
        {
          label: 'Security',
          icon: 'pi pi-shield',
          routerLink: ['/settings/security']
        },
        {
          label: 'Preferences',
          icon: 'pi pi-sliders-h',
          routerLink: ['/settings/preferences']
        }
      ]
    },
    {
      label: 'Reports',
      icon: 'pi pi-chart-bar',
      items: [
        {
          label: 'Sales',
          icon: 'pi pi-chart-line',
          routerLink: ['/reports/sales']
        },
        {
          label: 'Analytics',
          icon: 'pi pi-chart-pie',
          routerLink: ['/reports/analytics']
        }
      ]
    }
  ];

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  showSidebar() {
    this.sidebarOpen = true;
  }

  hideSidebar() {
    this.sidebarOpen = false;
  }
  
  onButtonHover(isHovered: boolean) {
    this.buttonHovered = isHovered;
    if(isHovered){
      this.showSidebar();
    }
  }

}