import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FavouritesPageComponent } from './favourites.page';

const routes: Routes = [{ path: '', component: FavouritesPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouritesRoutingModule {}
