import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss']
})
export class AddInvoiceComponent implements OnInit {

  constructor(private sidebarService: SidebarService) { }

  sidebarActive: boolean = false;
  ngOnInit() {
    // Subscribe to the sidebar active state
    this.sidebarService.sidebarActive$.subscribe((state: any) => {
      this.sidebarActive = !state;
    });

  } users: any = [];

}