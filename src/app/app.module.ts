import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderAtComponent } from './header-at/header-at.component';
import { HomeComponent } from './home/home.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { FooterAtComponent } from './footer-at/footer-at.component';
import { BandComponent } from './band/band.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAtComponent,
    HomeComponent,
    DropdownDirective,
    FooterAtComponent,
    BandComponent,
    EventComponent
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
