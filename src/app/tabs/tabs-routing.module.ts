import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'list',
        loadChildren: () =>
          import('../features/list/list.module').then((m) => m.ListModule)
      },
      {
        path: 'favourites',
        loadChildren: () =>
          import('../features/favourites/favourites.module').then(
            (m) => m.FavouritesModule
          )
      },
      {
        path: 'details',
        loadChildren: () =>
          import('../features/details/details.module').then(
            (m) => m.DetailsModule
          )
      },
      {
        path: '',
        redirectTo: '/tabs/list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class TabsPageRoutingModule {}
