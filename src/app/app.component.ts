import { Component, OnInit } from '@angular/core';
import { Menu } from './interfaces/menu';
import { Offer } from './interfaces/offer';
import { MenuService } from './services/menu.service';
import { OfferService } from './services/offer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cornet-project';

  menu: Menu[] = [];
  offer: Offer[] = [];
  favourites: Offer[] = [];
  filter: string = '';


  constructor(private menuService:MenuService, private offerService: OfferService) {
    
  }

  handleFavourite(item: Offer) {


    this.offerService.patchOffer(item.id,item.isFavourite).subscribe((res) => {
      this.fetchOffer(this.filter)
      this.fetchFavourites()

    })
  }


  filterOffer(filterParam: string) {
    this.filter = filterParam;
    this.fetchOffer(filterParam)
  }

  fetchOffer(filterParam: string) {
    this.offerService.getOfferBySport(filterParam).subscribe((res) => {
      this.offer = res;
    })
  }

  fetchFavourites() {
    this.offerService.getFavourites().subscribe((res) => {
      this.favourites = res;
    })
  }

  ngOnInit(): void {
      //IMPLEMENTIRAT UNSUBSCRIBE KASNIJE
      this.menuService.getMenuItems().subscribe((res) => {
        this.menu = res;

        if(this.menu.length > 0) {
          this.filter = this.menu[0].name;
          this.fetchOffer(this.filter)
        }
      })

      this.fetchFavourites();

      

  }
}
