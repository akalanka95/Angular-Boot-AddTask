import { Component, OnInit } from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from "protractor/built/taskScheduler";
import {Tasks} from "../tasks.model";

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {

  addTaskValue: string = null;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  onTaskAdd(event){
    let task: Tasks = new Tasks(event.target.value,false,this.getDateAsString());
    console.log("target id is : " + event.target.value);
    this.taskService.addTask(task)
      .subscribe(
        (newTask: Tasks) => {
        //clear the input
          this.addTaskValue = ' ';
          this.taskService.onTaskAdded.emit(newTask);
    }
      )
  }


  getDateAsString(){
    let today = new Date();
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if(dd < 10){
      dd = '0' + dd;
    }
    if(mm < 10){
      mm = '0' + mm;
    }
    return mm + '/' + dd + '/' + yyyy ;

  }
}
