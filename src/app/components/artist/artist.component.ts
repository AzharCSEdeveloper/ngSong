import { Component,OnInit } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {SpotifyService } from '../../services/spotify.service';
import {Artist} from '../../../../artist';
import {Album} from '../../../../album';
import {ActivatedRoute,Params} from '@angular/router';
@Component({
  moduleId:module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html',
  
})
export class ArtistComponent implements OnInit {
    id:string;
    artist:Artist[];
    albums:Album[];
    constructor(
        private _spotifyService:SpotifyService,
        private _route:ActivatedRoute ){

    }
  ngOnInit(){
     this._route.params
     .map(params =>params['id'])
     .subscribe((id) => {
        this._spotifyService.getToken()
        .subscribe(data => {
            this._spotifyService.getArtist(id, data.access_token)
                 .subscribe(artist=> {
                   this.artist = artist;
                })
                this._spotifyService.getAlbums(id, data.access_token)
                .subscribe(albums => {
                  this.albums = albums.items;
                })
            })
     })
  }
  }