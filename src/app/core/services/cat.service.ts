import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';

import { Cat } from '../models/cat.model';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  constructor(private readonly httpClient: HttpClient) {}

  getCats(): Observable<Cat[]> {
    return this.httpClient.get<Cat[]>('assets/data/cats.json');
  }

  getCatByUri(uri: string): Observable<Cat | undefined> {
    return this.getCats().pipe<Cat | undefined>(
      map((cats: Cat[]): Cat | undefined =>
        cats.find((cat: Cat): boolean => cat.uri === uri)
      )
    );
  }
}
