import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Offer } from 'src/app/interfaces/offer';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  @Input()
  offerItems: Offer[] = []

  @Output()
  makeFavouriteEvent: EventEmitter<Offer> = new EventEmitter<Offer>();
  

  constructor() { }


  toggleFavourite(item: Offer) {
    item.isFavourite = !item.isFavourite
    this.makeFavouriteEvent.emit(item);

  }

  
  ngOnInit(): void {
  }

}
