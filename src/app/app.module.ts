import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me.component';
import { MyOfferComponent } from './components/my-offer.component';
import { CooperationTermsComponent } from './components/cooperation-terms.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';
import { HeaderComponent } from './components/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    MyOfferComponent,
    CooperationTermsComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
