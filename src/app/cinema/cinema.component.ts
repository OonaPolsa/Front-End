import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {MoviesService} from "../services/movies.service";

import {HttpClientService} from "../services/http-client.service";

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})

export class CinemaComponent implements OnInit {

  news: string [] =
    ['1', '2', '3', '4']

  cinemaData$: Observable<any>;
  searchTerm: any;


  constructor(private movieService: MoviesService) {
    this.cinemaData$ = this.movieService.getData();
  }


  ngOnInit(): void {
  }


}
