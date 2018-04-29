import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent {

  @Output() action = new EventEmitter<any>();

  @Input() disable: boolean = false;
  @Input() size: 'small' | 'medium' | 'big' = 'small';

  buttonClicked():void {
    if(!this.disable) {
      this.action.next();
    }
    return;
  }

}
