import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],  // Add FormsModule here
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  todoTitle: string = '';

  @Output() addTodo = new EventEmitter<string>();

  onSubmit() {
    if (this.todoTitle) {
      this.addTodo.emit(this.todoTitle);
      this.todoTitle = ''; // Reset the input after adding
    }
  }
}
