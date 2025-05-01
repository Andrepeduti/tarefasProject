import { Component, inject, Input } from '@angular/core';
import { ITask } from './model/task.interface';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: ITask;

  private tasksService = inject(TaskService);

  completeEvent() {
    this.tasksService.removeTask(this.task.id)
  }
}
