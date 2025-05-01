import { Injectable } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { INewTask } from './task/model/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = dummyTasks;

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if(tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((user) => user.userId === userId);
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((taskId) => taskId.id !== id);
    this.saveTask();
  }

  addTask(task: INewTask, userId: string) {
    this.tasks.push({
      userId: userId,
      id: `t${this.tasks.length + 1}`.toString(),
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    });
    this.saveTask();
  }

  private saveTask() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
