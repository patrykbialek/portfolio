import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutMeComponent } from './components/about-me.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact.component';
import { CooperationTermsComponent } from './components/cooperation-terms.component';
import { FooterComponent } from './components/footer.component';
import { HeaderComponent } from './components/header.component';
import { MyOfferComponent } from './components/my-offer.component';
import { GoTopComponent } from './go-top/go-top.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    MyOfferComponent,
    CooperationTermsComponent,
    ContactComponent,
    FooterComponent,
    GoTopComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
    GoTopComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
