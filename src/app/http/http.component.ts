import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  todos: Todo[] = []
  todoInput = ''
  loader = false

  constructor(private todoServices: TodoService) {
    this.loadTodos()
  }

  ngOnInit(): void {}

  loadTodos() {
    this.loader = true;
    this.todoServices.servicesLoadTodos()
    .subscribe(todos => {
      this.todos = todos;
      this.loader = false;
    });
  }

  addTodo() {
    if(!this.todoInput.trim()) {
      return
    }

    this.todoServices.servicesAddTodo({
        title: this.todoInput,
        completed: false
      }).subscribe(item => {
        this.todos.push(item);
        this.todoInput = '';
      });
  }

  removeTodo(id: number) {
    this.todoServices.servicesRemoveTodo(id)
      .subscribe( () => {
        this.todos = this.todos.filter(todo => todo.id !== id);
      });
  }

  completeTodo(id: number) {
    this.todoServices.servicesCompleteTodo(id)
      .subscribe(todo => {
        this.todos.find(val => val.id === todo.id).completed = true;
      })
  }
}

