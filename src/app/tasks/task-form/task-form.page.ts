import { TaskService } from './../shared/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from './../shared/task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.page.html',
  styleUrls: ['./task-form.page.scss'],
})
export class TaskFormPage implements OnInit {
  
  task: Task = new Task();
  title: string = "New Task";

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id){
      this.task = this.taskService.getById(parseInt(id));
      this.title = 'Editing Task';
    }
  }

  onSubmit(){
    // console.log(this.task.description);
    this.taskService.save(this.task);
    this.router.navigate(['']);
  }

}
