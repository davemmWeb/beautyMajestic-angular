import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { MoviesComponent } from './components/movies/movies.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { DarkthemeComponent } from './components/darktheme/darktheme.component';
import { OtherServicesComponent } from './components/other-services/other-services.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MoviesComponent,
    LandingComponent,
    NavBarComponent,
    CarouselComponent,
    GalleryComponent,
    ContactComponent,
    ServicesComponent,
    DarkthemeComponent,
    OtherServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
