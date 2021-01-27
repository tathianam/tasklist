import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonListItemPageRoutingModule } from './person-list-item-routing.module';

import { PersonListItemPage } from './person-list-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonListItemPageRoutingModule
  ],
  declarations: [PersonListItemPage]
})
export class PersonListItemPageModule {}
