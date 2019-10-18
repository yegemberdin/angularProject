import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {ImgServiceService} from '../../img-service.service';
import {User} from '../../User';
import {UserDataService} from '../../user-data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnChanges {
  filterBy?: string = 'all';
  visibleImages: any[] = [];

  public user: User;
  public loggedIn: boolean = false;

  constructor(private imageService: ImgServiceService, private userDataService: UserDataService) {
    this.userDataService.userData$.subscribe((data) => {
      this.user = data;
      if (this.user) {
        this.loggedIn = true;
      }
    })
    console.log(this.filterBy);
    this.visibleImages = this.imageService.getImages();

  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }
}

