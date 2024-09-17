import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [
    { label: 'Dashboard', submenu: [], active: false },
    { label: 'View User', submenu: [], active: false },
    { label: 'Add User', submenu: [], active: false },
    { label: 'Invoice', submenu: [], active: false },
    { label: 'View invoice', submenu: [], active: false },
    { label: 'Add invoice', submenu: [], active: false },
  ];

  submenuActive: boolean[] = [];
  activeMenuIndex: number | null = null;
  activeSubmenuIndex: number | null = null;

  currentUrl!: string;

  constructor(private router: Router,private sidebarService:SidebarService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

  expandedPanel(panel: string): boolean {
    // Ensure it returns a boolean by checking if the currentUrl includes the panel name
    return this.currentUrl ? this.currentUrl.includes(panel) : false;
  }

  expandPanel(panel: string): void {
    // You can implement this if you want more control over panel expansion manually
  }
  ngOnInit(): void {
    this.toggleSidebar()


  }
  topggelFlage = false;
  toggleSidebar() {
    this.sidebarService.toggleSidebar(); // Use the service to toggle
    this.topggelFlage = !this.topggelFlage;
  }

  toggleSubmenu(index: number) {
    this.submenuActive[index] = !this.submenuActive[index];
  }

  selectedVal = 'Dashboard';

  setActiveMenuItem(index: number, val: any) {
    console.log(val);

    this.selectedVal = val.label;
    this.activeMenuIndex = index;
    this.activeSubmenuIndex = null; // Reset submenu selection if a new menu is clicked
    console.log(this.selectedVal);

    if (val.label == 'Dashboard') {
      this.router.navigate(['/dashboard']);
    }
    else if (val.label == 'View User') {
      this.router.navigate(['/userView']);
    }
    else if (val.label == 'Add User') {
      this.router.navigate(['/addUser']);

    }
    else if (val.label == 'View invoice') {

      this.router.navigate(['/invoices/view']);


    }
    else if (val.label == 'Add invoice') {

      this.router.navigate(['/addInvoice']);


    }
  }

  setActiveSubmenuItem(menuIndex: number, subIndex: number) {
    this.activeMenuIndex = menuIndex;
    this.activeSubmenuIndex = subIndex;
  }
}
