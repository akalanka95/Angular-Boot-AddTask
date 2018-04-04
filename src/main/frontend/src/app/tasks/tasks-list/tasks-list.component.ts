import { Component, OnInit } from '@angular/core';
import {Tasks} from "../tasks.model";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: Tasks[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {

       this.taskService.getListOfTask()
        .subscribe(
          (tasks: any[]) => {
            this.tasks = tasks
          },
        (error) => console.log(error)
        );

      this.taskService.onTaskAdded.subscribe(
        (task: Tasks) => {
          this.tasks.push(task)
        }
      );
      /*this.tasks.push(new Tasks(1,'Task one',true,'01/7/2020')),
      this.tasks.push(new Tasks(2,'Task getting plan',false,'11/7/2020')),
      this.tasks.push(new Tasks(3,'Task getting implemented',false,'21/7/2020')),
      this.tasks.push(new Tasks(4,'Task getting maintained',false,'01/08/2020'))
 */ }

  onTaskChange(event ,task){
   /* console.log("Task has been changed");*/
   return this.taskService.saveTask(task , event.target.checked).subscribe();
  }

  getDateLabel(task: Tasks){
    return task.completed ? 'badge-success' : 'badge-primary' ;
  }
  deleteTask(task: Tasks){
    return this.taskService.delete(task).subscribe();
  }

}
