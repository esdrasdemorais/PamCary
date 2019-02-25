import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../../message';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.scss']
})
export class DashboardDetailComponent implements OnInit {
  @Input() message: Message;
  @Output() getMessages: EventEmitter<Array<Message>> = 
      new EventEmitter<Array<Message>>();
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  
  remove(message: Message): void {
      let messages: Array<Message> = this.apiService.removeMessage(message);
      this.message = null;
      this.getMessages.emit(messages);
  }
}