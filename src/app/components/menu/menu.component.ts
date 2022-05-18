import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()
  menuItems: Menu[] = []

  @Output()
  filterParam: EventEmitter<string> = new EventEmitter<string>();

  handleMenuClick(param: string){ 
    this.filterParam.emit(param);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
