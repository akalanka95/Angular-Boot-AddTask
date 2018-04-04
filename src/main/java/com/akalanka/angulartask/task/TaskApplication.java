package com.akalanka.angulartask.task;

import com.akalanka.angulartask.task.domain.Task;
import com.akalanka.angulartask.task.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@SpringBootApplication
public class TaskApplication implements CommandLineRunner{

	@Autowired
	private TaskService taskService;

	public static void main(String[] args) {
		SpringApplication.run(TaskApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		taskService.save(new Task(1,"Creating Spring Boot", LocalDate.now(),true));
		taskService.save(new Task(2,"Documenting Spring Boot", LocalDate.now().plus(1, ChronoUnit.DAYS),false));
		taskService.save(new Task(3,"Testing Spring Boot in Integration", LocalDate.now().plus(2, ChronoUnit.DAYS),false));
	}
}
