import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module')
      .then(m => m.TodoModule),
  },
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}