import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonListItemPage } from './person-list-item.page';

const routes: Routes = [
  {
    path: '',
    component: PersonListItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonListItemPageRoutingModule {}
