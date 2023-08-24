import { Component, inject, Input } from "@angular/core";
import { Movie } from "src/app/models/movie.model";
import { Product } from "src/app/models/product.model";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

    @Input() products!: Movie;

}