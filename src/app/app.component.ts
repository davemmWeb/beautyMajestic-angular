import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../app/models/product.model'
import { Movie } from '../app/models/movie.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beautyMajestic';
  http = inject(HttpClient);
  products: Movie[] = []

  changeTitle() {
    this.title = 'changed'
  }

  ngOnInit() {
    this.http.get<Movie[]>("https://www.omdbapi.com/?i=tt3896198&apikey=57c4fcda")
      .subscribe((data) => {
        this.products = data
      })
  }
}


