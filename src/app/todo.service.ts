import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodoItem} from "./todo/todo.types";
import {Observable} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient, private snackbar: MatSnackBar) {
  }
    public load(): Observable<TodoItem[]> {
      return this.http.get<TodoItem[]>('./assets/todos.json').pipe(
        tap(() => this.snackbar.open('todos successfully loaded', 'Ok', {duration: 2000})),
        catchError((e) => {
          this.snackbar.open('couldn\'t load todos, ok');
          return [];
        })
      )
    }
}
