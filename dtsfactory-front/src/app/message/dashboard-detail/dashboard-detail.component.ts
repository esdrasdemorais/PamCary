import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../message';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.scss']
})
export class DashboardDetailComponent implements OnInit {
  @Input() message: Message;
    
  constructor() { }

  ngOnInit() {
  }
  
  remove(message: Message): void {
      message = null;
  }
}