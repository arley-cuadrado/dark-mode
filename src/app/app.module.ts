import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { MainCardsComponent } from './modules/main-cards/main-cards.component';
import { OverviewCardsComponent } from './modules/overview-cards/overview-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainCardsComponent,
    OverviewCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
