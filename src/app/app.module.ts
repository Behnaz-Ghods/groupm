import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { EditPasswordComponent } from './edit-password/edit-password.component';
import { PasswordListComponent } from './password-list/password-list.component';
import { FormsModule } from '@angular/forms';
import { ViewPasswordComponent } from './view-password/view-password.component';
import { DeletePasswordComponent } from './delete-password/delete-password.component';
import { AddPasswordComponent } from './add-password/add-password.component';
import { AppRoutingModule } from "src/app/app-routing.module";
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    AddPasswordComponent,
    EditPasswordComponent,
    PasswordListComponent,
    ViewPasswordComponent,
    DeletePasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
