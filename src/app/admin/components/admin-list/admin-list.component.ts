import { Component, OnInit } from '@angular/core';
import HandyCollapse from "handy-collapse";

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initializeHandyCollapse();
  }

  initializeHandyCollapse(){
    return new HandyCollapse();
  }

}
