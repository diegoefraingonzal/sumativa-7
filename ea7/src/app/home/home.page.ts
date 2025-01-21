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
  tasks: { name: string; date: string; completed: boolean }[] = [];

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      completed: [false]
    });
  }

  addTask() {
    if (this.taskForm.valid) {
      this.tasks.push({
        name: this.taskForm.value.name,
        date: this.taskForm.value.date,
        completed: this.taskForm.value.completed
      });
      this.taskForm.reset();
    }
  }

  toggleTaskCompletion(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
