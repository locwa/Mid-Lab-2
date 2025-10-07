import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { TaskServiceService } from '../services/task-service.service'

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks:any = []

  constructor(private functions: TaskServiceService){}
  
  ngOnInit(){
    this.tasks = this.functions.getTasks()
  }
  
  updateTasks(id : any){
    this.functions.changeTaskCompletedStatus(id)
    this.tasks = this.functions.getTasks()
  }

  deleteTask(id : any){
    this.functions.deleteTask(id)
    this.tasks = this.functions.getTasks()
  }
}
