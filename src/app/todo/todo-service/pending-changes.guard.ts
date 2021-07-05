import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TodoAddComponent} from '../todo-add/todo-add.component';

@Injectable({providedIn: 'root'})
export class PendingChangesGuard implements CanDeactivate<TodoAddComponent> {
  canDeactivate(
    component: TodoAddComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    if (component.newTodoForm.dirty) {
      return confirm('really leave?');
    }
    return true;
  }
}
