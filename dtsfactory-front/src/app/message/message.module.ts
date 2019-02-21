import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';
import { MessageComponent } from './message.component';

import { MessageRoutingModule } from './message-routing-module';

@NgModule({
  declarations: [
    DashboardComponent, DashboardListComponent, DashboardDetailComponent, MessageComponent
  ],
  imports: [
    CommonModule,
    MessageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MessageModule { }