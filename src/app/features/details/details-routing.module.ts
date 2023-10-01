import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsPageComponent } from './details.page';

const routes: Routes = [{ path: ':uri', component: DetailsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule {}
