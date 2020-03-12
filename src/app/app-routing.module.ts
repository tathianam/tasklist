import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'task-list', pathMatch: 'full' },
  //a linha "task-form" tem o mesmo efeito, porem esse aqui está mais enxuto
  { path: 'task-list',loadChildren:'./tasks/task-list/task-list.module#TaskListPageModule'},
  { path: 'new',loadChildren:'./tasks/task-form/task-form.module#TaskFormPageModule'},
  { path: 'edit/:id',loadChildren:'./tasks/task-form/task-form.module#TaskFormPageModule'},
/*   {
    path: 'task-list-item',
    loadChildren: () => import('./tasks/task-list-item/task-list-item.module').then( m => m.TaskListItemPageModule)
  },
   {
    path: 'task-form',
    loadChildren: () => import('./tasks/task-form/task-form.module').then( m => m.TaskFormPageModule)
  },
  */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
