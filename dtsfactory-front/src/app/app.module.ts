import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageModule } from './message/message.module';

import { DatePipeComponent } from './date-pipe/date-pipe.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

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
import { NgxMaskModule } from './ngx-mask/ngx-mask.module';
import {FlexLayoutModule} from '@angular/flex-layout';
//import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    DatePipeComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MessageModule,
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
  ],  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }