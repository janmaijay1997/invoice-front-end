import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { AddUserComponent } from './main/add-user/add-user.component';
import { UserManagmentComponent } from './main/user-managment/user-managment.component';
import { AddInvoiceComponent } from './main/add-invoice/add-invoice.component';
import { ViewInvoiceComponent } from './main/view-invoice/view-invoice.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addUser', component: AddUserComponent },
  { path: 'userView', component: UserManagmentComponent },
  { path: 'invoices/create', component: AddInvoiceComponent },
  { path: 'invoices/view', component: ViewInvoiceComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
