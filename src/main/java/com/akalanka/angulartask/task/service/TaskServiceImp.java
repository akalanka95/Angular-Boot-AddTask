package com.akalanka.angulartask.task.service;

import com.akalanka.angulartask.task.domain.Task;
import com.akalanka.angulartask.task.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImp implements TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public Iterable<Task> list() {
        return this.taskRepository.findAll();
    }

    @Override
    public Task save(Task task) {
        return this.taskRepository.save(task);
    }

    @Override
    public void delete(Integer id) {
         this.taskRepository.deleteById(id);
    }
}
