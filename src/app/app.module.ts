import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from './header/header.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent, UserComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, HeaderModule, TasksModule],
})
export class AppModule {}
