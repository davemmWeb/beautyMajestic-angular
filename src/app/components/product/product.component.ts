import { Component, Input, inject } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  // @Input() movies!: Movie;
  http = inject(HttpClient);
  movies: Movie[] = []

  ngOnInit() {
    this.http.get<Movie[]>("https://www.omdbapi.com/?i=tt3896198&apikey=57c4fcda")
      .subscribe((data) => {
        this.movies = data
      })
  }
}


