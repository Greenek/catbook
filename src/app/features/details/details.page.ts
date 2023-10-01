import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Cat } from 'src/app/core/models/cat.model';
import { CatService } from 'src/app/core/services/cat.service';
import { FavouritesService } from 'src/app/core/services/favourites.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss']
})
export class DetailsPageComponent implements OnInit {
  cat$!: Observable<Cat | undefined>;
  isFavourite!: boolean;

  private catUri!: string;

  constructor(
    private readonly catService: CatService,
    private readonly favouritesService: FavouritesService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.catUri = this.route.snapshot.paramMap.get('uri')!;

    this.cat$ = this.catService.getCatByUri(this.catUri);
    this.isFavourite = this.favouritesService.isFavourite(this.catUri);
  }

  toggleFavourite(): void {
    this.isFavourite = this.isFavourite
      ? this.favouritesService.removeFromFavourites(this.catUri)
      : this.favouritesService.addToFavourites(this.catUri);
  }
}
