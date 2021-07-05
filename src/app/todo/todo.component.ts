import {Component} from '@angular/core';
import {TodoItem} from "./todo.types";
import {TodoService} from "./todo-service/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
  styleUrls:['./todo.component.scss']
})

export class TodoComponent {
  constructor(private todoService: TodoService) {}

  get items(): TodoItem[] {
    return this.todoService.items;
  }
}
