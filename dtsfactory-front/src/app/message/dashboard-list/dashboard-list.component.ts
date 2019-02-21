import { Component, OnInit } from '@angular/core';
import { Message } from '../../message';
import { MESSAGES } from '../../message-mock';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {

  messages = MESSAGES;
  
  selectedMessage: Message;
    
  constructor() { }

  ngOnInit() {
  }

  onSelect(message: Message): void {
      this.selectedMessage = message;
  }
}