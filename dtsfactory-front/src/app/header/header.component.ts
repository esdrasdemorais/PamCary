import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Menu } from '../menu';
import { MENU_ITEMS } from '../menu-mock';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  
  menus = MENU_ITEMS;

  selectedMenu: Menu;
  
  constructor() { }

  ngOnInit() {
  }
  
  public onToggleSidenav = () => {
      this.sidenavToggle.emit();
  }
  
  onSelect(menu: Menu): void {
      this.selectedMenu = menu;
  }
}