import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from "../../models/tasks";
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  @Output() sendID = new EventEmitter;

  filter: boolean | undefined;

  tasks: Task[] | undefined;

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.filter = false;
    this.tasks = this.tasksService.getTasks();
  }

  setFilter(filter: string){
    switch(filter){
      case 'completed': {
        this.filter = true;
        break;
      }
      case 'pending': {
        this.filter = false;
        break;
      }
    }
  }

  editTask(id: number){
    this.sendID.emit(id);
  }

  deleteTask(index: number){
    this.tasksService.deleteTask(index);
  }

}
