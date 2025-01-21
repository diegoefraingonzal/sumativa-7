import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  taskForm: FormGroup;
  tasks: Array<{ title: string; dueDate: string; done: boolean }> = [];
  filter: string = 'all';

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      dueDate: ['', Validators.required]
    });
  }

  addTask() {
    if (this.taskForm.valid) {
      this.tasks.push({
        title: this.taskForm.value.title,
        dueDate: this.taskForm.value.dueDate,
        done: false
      });
      this.taskForm.reset();
    }
  }

  toggleCompletion(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  getFilteredTasks() {
    if (this.filter === 'completed') {
      return this.tasks.filter(task => task.done);
    } else if (this.filter === 'pending') {
      return this.tasks.filter(task => !task.done);
    }
    return this.tasks;
  }
}
