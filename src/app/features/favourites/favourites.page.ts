import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Cat } from 'src/app/core/models/cat.model';
import { CatService } from 'src/app/core/services/cat.service';
import { FavouritesService } from 'src/app/core/services/favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss']
})
export class FavouritesPageComponent {
  cats$?: Observable<Cat[]>;

  constructor(
    private readonly catService: CatService,
    private readonly favouritesService: FavouritesService
  ) {}

  ionViewWillEnter(): void {
    this.cats$ = this.catService
      .getCats()
      .pipe(
        map((cats: Cat[]) =>
          cats.filter((cat: Cat) => this.favouritesService.isFavourite(cat.uri))
        )
      );
  }

  trackByCatUri(_index: number, cat: Cat): string {
    return cat.uri;
  }
}
