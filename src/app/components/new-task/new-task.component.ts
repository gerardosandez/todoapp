import { Component, OnInit } from '@angular/core';

import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  newID = 4;

  getDefaultState = () => ({
    id: this.newID,
    title: '',
    description: '',
    end_date: '',
    status: false
  })

  newTask = this.getDefaultState();

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  addTask(){
    if(this.newTask.title !== '' && this.newTask.end_date !== '' && this.newTask.description !== ''){
      this.tasksService.addTask(this.newTask);
      this.newID ++;
      this.newTask = this.getDefaultState();
    }
  }

}
