import { Component, OnInit } from '@angular/core';
import HandyCollapse from "handy-collapse";
import { KeyValuePair } from 'src/app/masterData/masterData';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {
  adminList:KeyValuePair[];
  handyCollapse = new HandyCollapse();

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.loadAdminList();
  }

  loadAdminList(){
   this.adminList= this.adminService.getAdminList();
  }

}
