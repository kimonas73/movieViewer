import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { DataProviderService } from '../api/data-provider.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  ImageURL = "http://image.tmdb.org/t/p/w200/";

  movieId = "";
  original_title = "";
  overview = "";
  vote_average = "";
  poster_path = "";

  constructor(public route: ActivatedRoute, public dataProvider: DataProviderService) { 

  }

  ngOnInit() {
    this.route.params.subscribe(prms => {
      this.movieId = prms['route']; 
      if (this.movieId) {
        this.dataProvider.find(this.movieId).subscribe(res =>  {
          this.original_title = res.original_title;
          this.overview = res.overview;
          this.original_title = res.original_title;
          this.vote_average = res.vote_average;
          this.poster_path = this.ImageURL + res.poster_path;
        });
      }
    })    
  }

}
