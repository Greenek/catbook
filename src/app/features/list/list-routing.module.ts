import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPageComponent } from './list.page';

const routes: Routes = [{ path: '', component: ListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule {}
