import {Component, Input, Output, EventEmitter} from '@angular/core';
import {TodoItem} from "../todo.types";
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {TodoService} from "../todo-service/todo.service";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})

export class TodoAddComponent {

  @Input() currentMaxId: number = 0;
  @Output() public added = new EventEmitter<TodoItem>();

  public newTodoForm: FormGroup;

  constructor(private todoservice: TodoService) {
    this.newTodoForm = new FormGroup({
      description: new FormControl(null, Validators.required)
    })
  }

  public onAdd(form: FormGroupDirective): void {
    if (this.newTodoForm.valid && this.newTodoForm.dirty) {
      this.todoservice.add(
        this.newTodoForm.get('description')?.value,
      )
      form.resetForm();
      this.newTodoForm.reset();
      this.newTodoForm.markAsUntouched();
    }
  }
}
