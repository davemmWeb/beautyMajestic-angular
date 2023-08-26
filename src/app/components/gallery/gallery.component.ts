import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images: Array<{ id: number, imagePath: string, name: string }> = [
    { id: 1, imagePath: '.../../../assets/galeriaUno.jpg', name: 'Imagen 1' },
    { id: 2, imagePath: '../../../assets/galeriaDos.jpg', name: 'Imagen 2' },
    { id: 3, imagePath: '../../../assets/galeriaTres.jpg', name: 'Imagen 3' },
    { id: 4, imagePath: '../../../assets/galeriaCuatro.jpg', name: 'Imagen 4' },
    { id: 5, imagePath: '../../../assets/galeriaCinco.jpg', name: 'Imagen 5' },
    { id: 6, imagePath: '../../../assets/galeriaSeis.jpg', name: 'Imagen 6' },
    { id: 7, imagePath: '../../../assets/galeriaSiete.jpg', name: 'Imagen 7' },
    { id: 8, imagePath: '../../../assets/galeriaOcho.jpg', name: 'Imagen 8' },
    { id: 9, imagePath: '../../../assets/galeriaNueve.jpg', name: 'Imagen 9' },
    { id: 10, imagePath: '../../../assets/galeriaDiez.jpg', name: 'Imagen 10' },
    { id: 11, imagePath: '../../../assets/galeriaOnce.jpg', name: 'Imagen 11' },
    { id: 12, imagePath: '../../../assets/galeriaDoce.jpg', name: 'Imagen 12' },
    { id: 13, imagePath: '../../../assets/galeriaTrece.jpg', name: 'Imagen 13' },
    { id: 14, imagePath: '../../../assets/galeriaCatorce.jpg', name: 'Imagen 14' },
  ];
}
