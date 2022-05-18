import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Offer } from '../interfaces/offer';

const baseUrl = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http:HttpClient) { }

  getOffer() {
    return this.http.get<Offer[]>(`${baseUrl}/events`)
  }

  patchOffer(offerId: number, isFavourite: boolean) {
    return this.http.patch(`${baseUrl}/events/${offerId}`, {
      isFavourite: isFavourite
    })
  }

  getOfferBySport(sport: string) {
    return this.http.get<Offer[]>(`${baseUrl}/events?sport=${sport}`)
  }

  getFavourites() {
    return this.http.get<Offer[]>(`${baseUrl}/events?isFavourite=true`)

  }
}
