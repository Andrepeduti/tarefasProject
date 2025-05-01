import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TasksComponent, NewTaskComponent, TaskComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [TasksComponent]
})
export class TasksModule { }
