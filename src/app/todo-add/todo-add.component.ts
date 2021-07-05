import {Component, Input, Output, EventEmitter} from '@angular/core';
import {TodoItem} from "../todo/todo.types";
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})

export class TodoAddComponent {

  @Input() currentMaxId: number = 0;
  @Output() public added = new EventEmitter<TodoItem>();

  public newTodoForm: FormGroup;

  constructor() {
    this.newTodoForm = new FormGroup({
      description: new FormControl(null, Validators.required)
    })
  }

  public onAdd(form: FormGroupDirective): void {
    if (this.newTodoForm.valid && this.newTodoForm.dirty) {
      this.added.emit({
        id: this.currentMaxId + 1,
        description: this.newTodoForm.get('description')?.value,
        checked: false
      })
      form.resetForm();
      this.newTodoForm.reset();
      this.newTodoForm.markAsUntouched();
    }
  }
}
