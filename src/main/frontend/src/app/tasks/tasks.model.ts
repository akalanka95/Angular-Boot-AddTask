export class Tasks{

  public id:number;
  public name:string;
  public completed:boolean;
  public date:string;


  constructor( name: string, completed: boolean, date: string) {
    this.name = name;
    this.completed = completed;
    this.date = date;
  }
}
