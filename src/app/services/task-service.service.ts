import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  
  private tasks:any = []
  private tasksTotal:number = this.tasks.length
  private taskId = 0

  getTasks() {
    return this.tasks
  }

  addTask(taskName: string) {
    this.tasks.push({'taskName': taskName, 'taskId': this.taskId, 'taskCompleted': false})
    this.taskId += 1
    this.tasksTotal = this.tasks.length
  }

  getTasksTotal() {
    return this.tasksTotal   
  }
}
