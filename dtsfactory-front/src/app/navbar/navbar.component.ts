import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MENU_ITEMS } from '../menu-mock';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menus = MENU_ITEMS;
  
  selectedMenu: Menu;
  
  constructor() { }

  ngOnInit() {
      
  }
  
  onSelect(menu: Menu): void {
      this.selectedMenu = menu;
  }
}