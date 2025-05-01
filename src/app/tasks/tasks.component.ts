import { Component, Input } from '@angular/core';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  addTaskClick = false;
  actualUser = '';

  constructor(private taskService: TaskService) {}

  get selectTasksUser() {
    return this.taskService.getUserTasks(this.userId);
  }

  addTask() {
    this.addTaskClick = true;
  }

  closeTask() {
    this.addTaskClick = false;
  }
}
