import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CreatePlayerComponent } from './components/createplayer-component/createplayer-component.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerlistComponent } from './components/playerlist/playerlist.component';
import { PlayerdetailsComponent } from './components/playerdetails/playerdetails.component';
import { UpdateplayerComponent } from './components/updateplayer/updateplayer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreatePlayerComponent,
    PlayerlistComponent,
    PlayerdetailsComponent,
    UpdateplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }