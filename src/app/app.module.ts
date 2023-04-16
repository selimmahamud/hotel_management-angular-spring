import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomsComponent } from './rooms/rooms.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RoombookingComponent } from './roombooking/roombooking.component';
import { CreateComponent } from './roombooking/create/create.component';
import { IndexComponent } from './roombooking/index/index.component';
import { EditComponent } from './roombooking/edit/edit.component';
import { ViewComponent } from './roombooking/view/view.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomsComponent,
    FacilitiesComponent,
    ContactComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    RoombookingComponent,
    CreateComponent,
    IndexComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
