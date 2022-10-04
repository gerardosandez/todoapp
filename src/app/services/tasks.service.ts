import { Injectable } from '@angular/core';
import { Task } from '../models/tasks';

const taskList = [
  {
    id: 1,
    title: 'Tarea 1',
    description: 'Descripcion de ejemplo de tarea 1',
    end_date: '2022-10-05',
    status: false
  },
  {
    id: 2,
    title: 'Tarea 2',
    description: 'Descripcion de ejemplo de tarea 2',
    end_date: '2022-10-05',
    status: true
  },
  {
    id: 3,
    title: 'Tarea 3',
    description: 'Descripcion de ejemplo de tarea 3',
    end_date: '2022-10-05',
    status: false
  }
]

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTasks(){
    return taskList;
  }

  getTask(id: number){
    return taskList.find(task => task.id === id);
  }

  addTask(task: Task){
    taskList.push(task);
  }

  editTask(newTaskEdit: Task | undefined){
    // @ts-ignore
    const index = taskList.findIndex(task => task.id === newTaskEdit.id);
    // @ts-ignore
    taskList[index] = newTaskEdit;
  }

  deleteTask(id: number){
    taskList.splice(id, 1);
  }

}
