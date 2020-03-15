import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonFormPage } from './person-form.page';

const routes: Routes = [
  {
    path: '',
    component: PersonFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonFormPageRoutingModule {}
