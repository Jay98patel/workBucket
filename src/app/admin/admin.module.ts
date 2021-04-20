import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { AdminService } from './services/admin.service';
import { MasterData } from '../masterData/masterData';


@NgModule({
  declarations: [AdminComponent, AdminListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  providers:[AdminService,MasterData]
})
export class AdminModule { }
