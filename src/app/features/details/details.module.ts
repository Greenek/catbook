import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsPageComponent } from './details.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DetailsPageComponent],
  imports: [IonicModule, CommonModule, DetailsRoutingModule, SharedModule]
})
export class DetailsModule {}
