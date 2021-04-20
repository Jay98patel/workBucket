
export interface KeyValuePair {
  id: number;
  name: string;
  description:string;
  age:number;
  location:string;
  occupation:string;
}

export class MasterData {
  adminsList:KeyValuePair[];

  public AdminList() {
    this.adminsList = [
      { id: 1, name: "John",age:23,location:"Delhi",occupation:"Accountant",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," },
       { id: 2, name: "James",age:32,location:"Mumbai",occupation:"Administrator",description:"when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" },
        { id: 3, name: "Jay",age:28,location:"Kolkatta",occupation:"Art Director",description:"but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"}];
    return this.adminsList;
  }
}