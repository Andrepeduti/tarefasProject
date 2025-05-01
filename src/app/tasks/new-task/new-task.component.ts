import {
  Component,
  inject,
  Input,
  output,
} from '@angular/core';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({required: true}) idUser!: string;
  close = output<void>();
  enTitle = '';
  enSummary = '';
  enDate = '';
  private taskSertice = inject(TaskService)

  cancelAddTask() {
    this.close.emit();
  }

  onSubmit() {
    this.taskSertice.addTask({
      title: this.enTitle,
      summary: this.enSummary,
      dueDate: this.enDate,
    }, this.idUser)

    this.close.emit();
  }
}
