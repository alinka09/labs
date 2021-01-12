import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  { path: '', component: HomePageComponent }, //ссылка home page
  { path: 'user', component: UserListComponent }, //ссылка на пользователей
  { path: 'user/:id', component: UserEditComponent }, //ссылка на редактирование определенного пользователя
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
