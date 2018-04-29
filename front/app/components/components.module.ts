import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CardComponent } from './card/card.component';
import { MenuComponent } from './menu/menu.component';
import { BtnComponent } from './btn/btn.component';

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
    MenuComponent,
    BtnComponent
  ]
})
export class ComponentsModule { }
