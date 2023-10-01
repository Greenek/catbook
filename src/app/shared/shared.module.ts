import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FilterListPipe } from './pipes/filter-list.pipe';
import { CatCardComponent } from './components/cat-card/cat-card.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  exports: [FilterListPipe, CatCardComponent],
  declarations: [FilterListPipe, CatCardComponent]
})
export class SharedModule {}
