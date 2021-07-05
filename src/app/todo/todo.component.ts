import {Component, OnInit} from '@angular/core';
import {TodoItem} from "./todo.types";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
  styleUrls:['./todo.component.scss']
})

export class TodoComponent implements OnInit{

  public items: TodoItem[] = [];

  constructor(private todoService: TodoService) {}

  onAdd(newTodo: TodoItem): void {
    this.items.push(newTodo)
  }

  ngOnInit(): void {
    this.todoService.load().subscribe((todos) => {
      this.items = todos;
    })
  }


}
