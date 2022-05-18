import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Menu } from '../interfaces/menu';

const baseUrl = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }

  getMenuItems() {
    return this.http.get<Menu[]>(`${baseUrl}/menu`);
  }
}
