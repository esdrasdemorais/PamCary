import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Menu } from '../menu';
import { MENU_ITEMS } from '../menu-mock';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    
  //@Output() public sidenavToggle = new EventEmitter();
  @Output() sidenavClose = new EventEmitter();
    
  menus = MENU_ITEMS;
  
  selectedMenu: Menu;
  
  constructor() { }

  ngOnInit() {
      
  }
  
  onSelect(menu: Menu): void {
      this.selectedMenu = menu;
  }
  
  public onSidenavClose = () => {
      this.sidenavClose.emit();
  }
  
//  public onToggleSidenav = () => {
//      this.sidenavToggle.emit();
//  }
}