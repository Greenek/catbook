import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesPageComponent } from './favourites.page';

describe('FavouritesPageComponent', () => {
  let component: FavouritesPageComponent;
  let fixture: ComponentFixture<FavouritesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouritesPageComponent]
    });
    fixture = TestBed.createComponent(FavouritesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
