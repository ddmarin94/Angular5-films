import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CardComponent } from './card/card.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SearchBarComponent,
    CardComponent,
    MenuComponent
  ],
  declarations: [
    SearchBarComponent,
    CardComponent,
    MenuComponent
  ]
})
export class ComponentsModule { }
