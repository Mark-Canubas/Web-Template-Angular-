import { Component, HostListener, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth/auth.service';
@Component({
  selector: 'app-layout',
  imports: [CommonModule, ButtonModule, RouterModule, PanelMenuModule],
  templateUrl: './layout.html',
})
export class Layout {
  sidebarOpen = false;
  buttonHovered = false;

  authService = inject(AuthService);
  router = inject(Router);

  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      routerLink: ['/home'],
    },
    {
      label: 'Products',
      icon: 'pi pi-box',
      items: [
        {
          label: 'All Products',
          icon: 'pi pi-tags',
        },
        {
          label: 'Add Product',
          icon: 'pi pi-star',
        },
        {
          label: 'Categories',
          icon: 'pi pi-folder',
        },
      ],
    },
    {
      label: 'Orders',
      icon: 'pi pi-shopping-cart',
      items: [
        {
          label: 'All Orders',
          icon: 'pi pi-list',
        },
        {
          label: 'Pending',
          icon: 'pi pi-clock',
        },
        {
          label: 'Completed',
          icon: 'pi pi-check',
        },
      ],
    },
    {
      label: 'Reports',
      icon: 'pi pi-chart-bar',
      items: [
        {
          label: 'Sales Report',
          icon: 'pi pi-dollar',
        },
        {
          label: 'Analytics',
          icon: 'pi pi-chart-pie',
        },
        {
          label: 'Revenue',
          icon: 'pi pi-wallet',
        },
      ],
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog',
      items: [
        {
          label: 'My Profile',
          icon: 'pi pi-user',
        },
        {
          label: 'Security',
          icon: 'pi pi-shield',
        },
        {
          label: 'Notifications',
          icon: 'pi pi-bell',
        },
      ],
    },
  ];
  isLoggingOut: any;

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
    if (isHovered) {
      this.showSidebar();
    }
  }

 async signoutUser() {
    if (this.isLoggingOut) return;

    this.isLoggingOut = true;

    this.authService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(() => {
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 500);
      })
      .finally(() => {
        this.isLoggingOut = false;
      });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
