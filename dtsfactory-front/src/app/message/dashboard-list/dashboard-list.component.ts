import { Component, OnInit } from '@angular/core';
import { Message } from '../../message';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {
  messages: Array<Message> = [];

  selectedMessage: Message;
    
  constructor(private apiService: ApiService) { }

  ngOnInit() {
      this.getMessages();
  }

  onSelect(message: Message): void {
      this.selectedMessage = message;
  }
  
  getMessages() {
      this.messages = this.apiService.getMessages();
  }
  
  refreshMessages(event) {
      let messages: Array<Message> = event;
      this.messages = messages;
  }
}