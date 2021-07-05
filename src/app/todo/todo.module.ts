import {NgModule} from '@angular/core';
import {LayoutModule} from "@angular/cdk/layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatInputModule} from "@angular/material/input";
import {TodoRoutingModule} from "./todo-routing.module";
import {TodoComponent} from "./todo.component";
import {TodoAddComponent} from "./todo-add/todo-add.component";
import {TodosPipe} from "./todo.pipe";
import {TodoService} from "./todo-service/todo.service";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    TodoRoutingModule,
    CommonModule
  ],
  exports: [],
  declarations: [TodoComponent, TodoAddComponent, TodosPipe],
  providers: [TodoService],
})
export class TodoModule {
}
