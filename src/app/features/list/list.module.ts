import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ListRoutingModule } from './list-routing.module';
import { ListPageComponent } from './list.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ListPageComponent],
  imports: [IonicModule, CommonModule, ListRoutingModule, SharedModule]
})
export class ListModule {}
