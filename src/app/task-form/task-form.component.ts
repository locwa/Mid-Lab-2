import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskServiceService } from '../services/task-service.service'

@Component({
  selector: 'app-task-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  taskName = ""

  constructor(private functions: TaskServiceService){}

  addTask() {
    if (this.taskName !== ""){
      this.functions.addTask(this.taskName)
      this.taskName = ""
    }
  }
}
