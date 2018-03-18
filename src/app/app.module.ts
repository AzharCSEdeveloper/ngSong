import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from '../app/app.routes';

import {HttpModule} from '@angular/http';








import { NavbarComponent } from './components/navbar/navbar.component';
import {AboutComponent} from './components/about/about.component';
import { SearchComponent }  from './components/search/search.component';
import {ArtistComponent } from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
  ],
    
    imports:[ BrowserModule,AppRoutingModule,FormsModule,HttpModule],
  
  bootstrap: [AppComponent],
})
export class AppModule { }
