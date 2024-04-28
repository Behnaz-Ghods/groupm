import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddPasswordComponent } from './add-password/add-password.component';
import { PasswordListComponent } from './password-list/password-list.component';
import { ViewPasswordComponent } from './view-password/view-password.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { DeletePasswordComponent } from './delete-password/delete-password.component';

const routes: Routes = [
  { path: 'add-password', component: AddPasswordComponent },
  { path: 'passwords', component: PasswordListComponent },
  { path: 'passwords/:id', component: ViewPasswordComponent },
  { path: 'passwords/:id/edit', component: EditPasswordComponent },
  { path: 'passwords/:id/delete', component: DeletePasswordComponent },
  { path: '', redirectTo: '/passwords', pathMatch: 'full' },
  { path: '**', redirectTo: '/passwords' } // Redirect to 'passwords' for any other unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }