import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.scss']
})
export class UserManagmentComponent implements OnInit {
  constructor(private sidebarService: SidebarService) { }

  sidebarActive: boolean = false;
  ngOnInit() {
    // Subscribe to the sidebar active state
    this.sidebarService.sidebarActive$.subscribe((state: any) => {
      this.sidebarActive = state;
    });

  } users: any = [];
  deactivateUser(val: any) {

  }
  editUser(val: any) {

  }
  createUser() {

  }


}
