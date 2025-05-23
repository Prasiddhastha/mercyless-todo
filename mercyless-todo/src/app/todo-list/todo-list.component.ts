import { Component } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';  // Import CommonModule

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,  // Make this a standalone component
  imports: [TodoFormComponent, TodoItemComponent, CommonModule],  // Add CommonModule here
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];

  addTodo(title: string) {
    const newTodo: Todo = { id: this.todos.length + 1, title, completed: false };
    this.todos.push(newTodo);
  }

  toggleTodoStatus(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todoId: number) {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
  }
}
