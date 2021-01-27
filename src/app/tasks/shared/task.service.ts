import { Task } from './task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    { id: 1, description: 'Tarefa 01', completed: false },
    { id: 2, description: 'Tarefa 02', completed: false },
    { id: 3, description: 'Tarefa 03', completed: false },
    { id: 4, description: 'Tarefa 04', completed: true },
    { id: 5, description: 'Tarefa 05', completed: false },
    { id: 6, description: 'Tarefa 06', completed: false },
    { id: 7, description: 'Tarefa 07', completed: false },
    { id: 8, description: 'Tarefa 08', completed: true },
    { id: 9, description: 'Tarefa 09', completed: false },
    { id: 10, description: 'Tarefa 10', completed: false },
  ];

  constructor() { }

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    const task = this.tasks.find((value) => value.id == id);
    return task;
  }

  save(task: Task) {
    if (task.id) {
      const taskArray = this.getById(task.id);
      taskArray.description = task.description;
      taskArray.completed = task.completed;

    } else {
      const lastId = this.tasks[this.tasks.length - 1].id;
      task.id = lastId + 1;
      task.completed = false;
      this.tasks.push(task);
    }
  }

  delete(id: number) {
    const taskIndex = this.tasks.findIndex((value) => value.id == id);
    this.tasks.splice(taskIndex, 1);
  }
}
