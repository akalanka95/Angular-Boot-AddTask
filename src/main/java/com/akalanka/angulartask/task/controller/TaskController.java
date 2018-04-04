package com.akalanka.angulartask.task.controller;

import com.akalanka.angulartask.task.domain.Task;
import com.akalanka.angulartask.task.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping(value = {"","/"})
    public Iterable<Task> listOfTasks(){
        return this.taskService.list();
    }

    @PostMapping(value = "/save")
    public Task saveTask(@RequestBody Task task){
        return this.taskService.save(task);
    }

    @DeleteMapping(value = "/delete/{id}")
    public void deleteTask(@PathVariable Integer id){
        this.taskService.delete(id);
    }
}
