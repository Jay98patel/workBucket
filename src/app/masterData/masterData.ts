
export interface keyValuePair {
  id: number;
  name: string
}

export class masterData {
  adminsList:keyValuePair[];

  public AdminList() {
    this.adminsList = [{ id: 1, name: "John" }, { id: 2, name: "James" }, { id: 3, name: "Jay"}];
    return this.adminsList;
  }
}