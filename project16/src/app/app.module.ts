import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiSortPipe } from './sort/fi-sort.pipe';
import { IdSortPipe } from './sort/id-sort.pipe';
import { AgeSortPipe } from './sort/age-sort.pipe';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserEditComponent,
    HomePageComponent,
    HeaderComponent,
    UserComponent,
    FiSortPipe,
    IdSortPipe,
    AgeSortPipe,
    AddUserFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [
    AppComponent,
    UserListComponent,
    UserEditComponent,
    HomePageComponent,
    HeaderComponent,
  ],
})
export class AppModule {}
