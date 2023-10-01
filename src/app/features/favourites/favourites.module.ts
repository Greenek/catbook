import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FavouritesRoutingModule } from './favourites-routing.module';
import { FavouritesPageComponent } from './favourites.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FavouritesPageComponent],
  imports: [IonicModule, CommonModule, FavouritesRoutingModule, SharedModule]
})
export class FavouritesModule {}
