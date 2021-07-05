import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TodoComponent} from "./todo.component";
import {TodoAddComponent} from "./todo-add/todo-add.component";
import {PendingChangesGuard} from "./todo-service/pending-changes.guard";

export const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'add', component: TodoAddComponent, canDeactivate: [PendingChangesGuard] }
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {}
