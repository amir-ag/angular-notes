import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodoItem} from "../todo.types";
import {MatSnackBar} from "@angular/material/snack-bar";
import {catchError, tap} from "rxjs/operators";

@Injectable()
export class TodoService {

  public items: TodoItem[] = []

  constructor(private http: HttpClient, private snackbar: MatSnackBar) {
    this.load()
  }

  public add(description: string) {
    this.items.push({
      id: this.items.length + 1,
      description,
      checked: false,
    });
  }

  private load() {
    this.http
      .get<TodoItem[]>('assets/todos.json')
      .pipe(
        tap(() =>
          this.snackbar.open('todos successfully loaded', undefined, {
            duration: 2000,
          })
        ),
        catchError((e) => {
          this.snackbar.open('could not load todos', 'Ok');
          return [];
        })
      )
      .subscribe((todos) => {
        this.items = todos;
      });
  }
}
