import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {ListComponent} from './list/list.component'
import { DetailComponent } from './detail/detail.component';
import { UserComponent } from '../home/user/user.component';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
 
  {path:'login',component:LoginComponent},
  {path:'list',component:ListComponent},
  {path:'user',component:UserComponent},
  // {path:'detail',component:DetailComponent},
  { path: "detail/:id", component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
