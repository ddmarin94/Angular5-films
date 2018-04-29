import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Output() onChange = new EventEmitter<string>();

  @Input() selected = '';

  selectedValue(section:string):void {
    this.selected = section;
    this.onChange.next(this.selected);
  }
}
