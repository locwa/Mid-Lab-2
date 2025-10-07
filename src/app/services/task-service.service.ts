import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  
  private tasks:any = []
  private tasksTotal:number = this.tasks.length
  private taskId = 0
  private completedTasks:number = this.tasks.filter((task : any) => task.taskCompleted == true).length

  getTasks() {
    return this.tasks
  }

  addTask(taskName: string) {
    this.tasks.push({'taskName': taskName, 'taskId': this.taskId, 'taskCompleted': false})
    this.taskId += 1
    this.tasksTotal = this.tasks.length
  }

  deleteTask(id : any){
    this.tasks.forEach((task : any, index: number) => {
      if (task.taskId == id){
        this.tasks.splice(index, 1)
      }
    });
    this.tasksTotal = this.tasks.length
    this.completedTasks = this.tasks.filter((task : any) => task.taskCompleted == true).length
  }

  changeTaskCompletedStatus(id: number) {
    this.tasks.forEach((task : any) => {
      if (task.taskId == id){
        task.taskCompleted = !task.taskCompleted
        console.log(task.taskCompleted)
      }
    });
  }

  getTasksTotal() {
    return this.tasksTotal   
  }

  getTotalTasksCompleted() {
    this.completedTasks = this.tasks.filter((task : any) => task.taskCompleted == true).length
    return this.completedTasks
  }
}
