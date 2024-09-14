import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'invoiceWeb';
   
   // Sidebar visibility state
   isCollapsed = false;

   // Mobile view flag
   isMobileView = false;
 
   // Track which submenu is visible
   submenuVisibility :any= {
     home: false,
     services: false,
     clients: false
   };
 
   constructor() {
     this.checkScreenSize();
   }
 
   // Method to toggle sidebar visibility
   toggleSidebar() {
     this.isCollapsed = !this.isCollapsed;
   }
 
   // Method to toggle submenus
   toggleSubmenu(menu: string) {
     this.submenuVisibility[menu] = !this.submenuVisibility[menu];
   }
 
   // Listen to screen size changes
   @HostListener('window:resize', ['$event'])
   onResize(event: Event) {
     this.checkScreenSize();
   }
 
   // Check if it's mobile view (small screens)
   checkScreenSize() {
     this.isMobileView = window.innerWidth <= 768;
   }
}
