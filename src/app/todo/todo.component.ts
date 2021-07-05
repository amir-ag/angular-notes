import {Component, OnInit} from '@angular/core';
import {TodoItem} from "./todo.types";
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
  styleUrls:['./todo.component.scss']
})

export class TodoComponent {

  public items: TodoItem[] = [
    {id: 1, checked: false, description: 'Item 1'},
    {id: 2, checked: false, description: 'Item 2'},
    {id: 3, checked: false, description: 'Item 3'},
    {id: 4, checked: true, description: 'Item 4'},
    {id: 5, checked: false, description: 'Item 5'},
    {id: 6, checked: true, description: 'Item 6'},
  ]

  constructor() {}

  onAdd(newTodo: TodoItem): void {
    this.items.push(newTodo)
  }
}
