import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Cat } from 'src/app/core/models/cat.model';
import { CatService } from 'src/app/core/services/cat.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListPageComponent implements OnInit {
  cats$?: Observable<Cat[]>;
  searchText = '';

  constructor(private readonly catService: CatService) {}

  ngOnInit(): void {
    this.cats$ = this.catService.getCats();
  }

  onSearchInput(event: Event): void {
    this.searchText = (event as CustomEvent).detail.value;
  }

  trackByCatUri(_index: number, cat: Cat): string {
    return cat.uri;
  }
}
