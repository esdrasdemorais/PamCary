import { Component } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  //templateUrl: './date-pipe.component.html',
  template: `
      <span id="time">{{today | date: 'dd/MM/yyyy hh:mm a'}}</span>
  `,
  styleUrls: ['./date-pipe.component.scss']
})

export class DatePipeComponent {
  today: Number; 

  constructor() {
      this.today = Date.now();
  }
}