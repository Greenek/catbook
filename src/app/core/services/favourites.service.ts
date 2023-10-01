import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  private readonly favourites: Set<string> = new Set();

  addToFavourites(uri: string): boolean {
    if (!this.favourites.has(uri)) {
      this.favourites.add(uri);
    }

    return true;
  }

  isFavourite(uri: string): boolean {
    return this.favourites.has(uri);
  }

  removeFromFavourites(uri: string): boolean {
    if (this.favourites.has(uri)) {
      this.favourites.delete(uri);
    }

    return false;
  }
}
