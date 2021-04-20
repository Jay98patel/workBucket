
export interface KeyValuePair {
  id: number;
  name: string
}

export class MasterData {
  adminsList:KeyValuePair[];

  public AdminList() {
    this.adminsList = [{ id: 1, name: "John" }, { id: 2, name: "James" }, { id: 3, name: "Jay"}];
    return this.adminsList;
  }
}