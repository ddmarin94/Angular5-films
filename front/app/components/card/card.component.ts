import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() isCardButtonDisable: boolean = false;
  @Input() cardTitle: string = '';
  @Input() cardImage: string = '';

  constructor() { }

  ngOnInit() {

  }

  actionClicked() {
    console.log('action clicked');
  }

}
