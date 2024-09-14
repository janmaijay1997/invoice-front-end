import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  constructor(private sidebarService: SidebarService) { }

  sidebarActive: boolean = false;
  ngOnInit() {
    // Subscribe to the sidebar active state
    this.sidebarService.sidebarActive$.subscribe((state: any) => {
      this.sidebarActive = !state;
    });

  } users: any = [];
  deactivateUser(val: any) {

  }
  editUser(val: any) {

  }
  createUser() {

  }


}
