package com.akalanka.angulartask.task.service;

import com.akalanka.angulartask.task.domain.Task;
import org.springframework.stereotype.Service;


public interface TaskService {
    Iterable<Task> list();
    Task save(Task task);
    void delete(Integer id);
}
