import {Http} from "@angular/http";
import {EventEmitter, Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {Tasks} from "./tasks.model";

@Injectable()
export class TaskService{

  onTaskAdded = new EventEmitter<Tasks>();

  constructor(private http: Http){

  }

  getListOfTask(){
    return this.http.get('/api/tasks').map(response => response.json());
  /*.map(response => response.json())*/
  }

  saveTask(task: Tasks , checked: boolean){
    task.completed = checked;
    return this.http.post('/api/tasks/save' , task).map(response => response.json());
  }

  addTask(task: Tasks){
    return this.http.post('/api/tasks/save' , task).map(response => response.json());
  }

  delete(task: Tasks){
    return this.http.delete('/api/tasks/delete/5');
  }

}
