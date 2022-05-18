import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Offer } from 'src/app/interfaces/offer';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  @Input()
  offerItems: Offer[] = []

  @Output()
  removeFavouriteEvent: EventEmitter<Offer> = new EventEmitter<Offer>();
  

  constructor() { }


  toggleFavourite(item: Offer) {
    item.isFavourite = !item.isFavourite
    this.removeFavouriteEvent.emit(item);

  }

  
  ngOnInit(): void {
  }

}
