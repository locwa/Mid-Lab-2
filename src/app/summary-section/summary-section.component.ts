import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskServiceService } from '../services/task-service.service'

@Component({
  selector: 'app-summary-section',
  imports: [CommonModule, FormsModule],
  templateUrl: './summary-section.component.html',
  styleUrl: './summary-section.component.css'
})
export class SummarySectionComponent {

  constructor(private functions: TaskServiceService){}

  get taskNumber(){
    return this.functions.getTasksTotal()
  }
}
