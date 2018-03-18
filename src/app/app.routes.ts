import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {SearchComponent } from './components/search/search.component';
import {ArtistComponent } from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';




  
 const routes: Routes = [
   { path: 'about',component:AboutComponent},
   { path:'navar',component:NavbarComponent },
   { path:'', component:SearchComponent},
   {path:'artist/:id',component:ArtistComponent},
   {path: 'album/:id',component:AlbumComponent},
  
 

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
}) 
export class AppRoutingModule {

}
export const routingComponents = [AboutComponent, NavbarComponent, SearchComponent,];