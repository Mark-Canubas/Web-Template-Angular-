import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [PanelMenuModule, RouterOutlet],
  templateUrl: './layout.html',
})
export class Layout {
  navItems = [
    {
      label: 'Dashboard',
      icon: 'pi pi-fw pi-home',
    },
    {
      label: 'Analytics',
      icon: 'pi pi-fw pi-chart-line',
      items: [
        {
          label: 'Reports',
          icon: 'pi pi-fw pi-file',
        },
        {
          label: 'Statistics',
          icon: 'pi pi-fw pi-chart-bar',
        },
        {
          label: 'Insights',
          icon: 'pi pi-fw pi-eye',
        },
      ],
    },
    {
      label: 'Projects',
      icon: 'pi pi-fw pi-briefcase',
      items: [
        {
          label: 'Active',
          icon: 'pi pi-fw pi-check-circle',
        },
        {
          label: 'Archived',
          icon: 'pi pi-fw pi-inbox',
        },
        {
          label: 'Templates',
          icon: 'pi pi-fw pi-clone',
        },
      ],
    },
    {
      label: 'Team',
      icon: 'pi pi-fw pi-users',
      items: [
        {
          label: 'Members',
          icon: 'pi pi-fw pi-user',
        },
        {
          label: 'Roles',
          icon: 'pi pi-fw pi-shield',
        },
        {
          label: 'Invitations',
          icon: 'pi pi-fw pi-envelope',
        },
      ],
    },
    {
      label: 'Messages',
      icon: 'pi pi-fw pi-comments',
      badge: '5',
    },
    {
      label: 'Calendar',
      icon: 'pi pi-fw pi-calendar',
    },
    {
      label: 'Documents',
      icon: 'pi pi-fw pi-folder',
      items: [
        {
          label: 'My Files',
          icon: 'pi pi-fw pi-file',
        },
        {
          label: 'Shared',
          icon: 'pi pi-fw pi-share-alt',
        },
        {
          label: 'Recent',
          icon: 'pi pi-fw pi-clock',
        },
        {
          label: 'Trash',
          icon: 'pi pi-fw pi-trash',
        },
      ],
    },
    {
      label: 'Settings',
      icon: 'pi pi-fw pi-cog',
      items: [
        {
          label: 'Profile',
          icon: 'pi pi-fw pi-user-edit',
        },
        {
          label: 'Preferences',
          icon: 'pi pi-fw pi-sliders-h',
        },
        {
          label: 'Security',
          icon: 'pi pi-fw pi-lock',
        },
        {
          label: 'Notifications',
          icon: 'pi pi-fw pi-bell',
        },
      ],
    },
    {
      label: 'Help & Support',
      icon: 'pi pi-fw pi-question-circle',
      items: [
        {
          label: 'Documentation',
          icon: 'pi pi-fw pi-book',
        },
        {
          label: 'Contact Support',
          icon: 'pi pi-fw pi-phone',
        },
        {
          label: 'FAQ',
          icon: 'pi pi-fw pi-info-circle',
        },
      ],
    },
  ];
}
