import { Component, OnInit } from '@angular/core';

import { Task } from "../../models/tasks";
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  task: Task | undefined
  taskFound: Task | undefined

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  getID($event: number){
    this.task = this.tasksService.getTask($event);
    this.taskFound = this.task;
  }

  editTask(){
    this.tasksService.editTask(this.taskFound);
  }

}
