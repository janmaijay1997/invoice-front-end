import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'invoiceWeb';

  sidebarActive: boolean = true;
  menuItems: any[] = [
    { label: 'Item 1', submenu: ['Subitem 1-1', 'Subitem 1-2'], active: false },
    { label: 'Item 2', submenu: ['Subitem 2-1', 'Subitem 2-2'], active: false },
    { label: 'Item 3', submenu: [], active: false }
  ];
  submenuActive: boolean[] = [];
  activeMenuIndex: number | null = null;
  activeSubmenuIndex: number | null = null;

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  toggleSubmenu(index: number) {
    this.submenuActive[index] = !this.submenuActive[index];
  }

  setActiveMenuItem(index: number) {
    this.activeMenuIndex = index;
    this.activeSubmenuIndex = null; // Reset submenu selection if a new menu is clicked
  }

  setActiveSubmenuItem(menuIndex: number, subIndex: number) {
    this.activeMenuIndex = menuIndex;
    this.activeSubmenuIndex = subIndex;
  }
}
