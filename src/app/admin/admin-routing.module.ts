import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';

const routes: Routes = [
  {
    path:'',component:AdminListComponent
  },
  {
    path:'adminList',component:AdminListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
