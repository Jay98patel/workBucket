import { Component, OnInit } from '@angular/core';
import { KeyValuePair } from 'src/app/masterData/masterData';
import { AdminService } from '../../services/admin.service';
import {AccordionModule} from "ngx-accordion";

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {
  adminList:KeyValuePair[];

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.loadAdminList();
  }

  loadAdminList(){
   this.adminList= this.adminService.getAdminList();
  }

}
