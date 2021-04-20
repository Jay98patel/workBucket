import { Injectable } from '@angular/core';
import { KeyValuePair, MasterData } from 'src/app/masterData/masterData';

@Injectable()
export class AdminService {

  constructor(private masterData:MasterData) { 

  }

  getAdminList():KeyValuePair[]{
    return this.masterData.AdminList();
  }
}
