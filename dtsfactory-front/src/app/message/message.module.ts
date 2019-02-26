import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';
import { MessageComponent } from './message.component';

import { MessageRoutingModule } from './message-routing-module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatCardModule, MatFormFieldModule, 
    MatGridListModule, MatIconModule, MatInputModule,
    MatListModule, MatSelectModule, MatSidenavModule,
    MatToolbarModule, MatCheckboxModule, MatTabsModule
  }
    from
  '@angular/material';
import 'hammerjs';
import { NgxMaskModule } from '../ngx-mask/ngx-mask.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    DashboardComponent, DashboardListComponent, DashboardDetailComponent, MessageComponent
  ],
  imports: [
    CommonModule,
    MessageRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    NgxMaskModule.forRoot(),
    MatTabsModule,
    FlexLayoutModule
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule, 
    MatButtonModule,
    MatListModule
  ]
})
export class MessageModule { }