import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TodoComponent} from "./todo.component";
import {TodoAddComponent} from "./todo-add/todo-add.component";

export const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'add', component: TodoAddComponent }
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {}
