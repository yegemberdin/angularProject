import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {ImgServiceService} from '../../img-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnChanges {
  filterBy?: string = 'all';
  visibleImages: any[] = [];

  constructor(private imageService: ImgServiceService) {
    console.log(this.filterBy);
    this.visibleImages = this.imageService.getImages();

  }
  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }
}

