import { Component } from '@angular/core';

@Component({
  selector: 'app-media-mosaic',
  templateUrl: './media-mosaic.component.html',
  styleUrls: ['./media-mosaic.component.css']
})
export class MediaMosaicComponent {
  slideIndex: number = 1;

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    let i: number;
    const slides: HTMLElement[] = Array.from(document.getElementById("mediaMosaicSlides")?.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>);
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    slides.forEach((slide: HTMLElement) => {
      slide.style.display = "none";
    });
    slides[this.slideIndex - 1].style.display = "block";
  }

}
