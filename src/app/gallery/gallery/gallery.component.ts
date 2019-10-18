import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {ImgServiceService} from '../../img-service.service';
import {User} from '../../User';
import {UserDataService} from '../../user-data.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnChanges, OnInit {
  filterBy?: string = 'all';
  visibleImages: any[] = [];

  public user: User;
  public loggedIn: boolean = false;

  constructor(private imageService: ImgServiceService, private userService: UserDataService) {

    // this.user = JSON.parse(localStorage.getItem('user'))
    // if (this.user) {
    //       this.loggedIn = true;
    //     }

    console.log(this.filterBy);
    this.visibleImages = this.imageService.getImages();

  }
  ngOnInit(): void {
    this.showData()
  }

  showData() {
    this.userService.userData$.subscribe((data) => {
      console.log(data);
      this.user = data;
      // if (this.user) {
      //   this.loggedIn = true;
      // }
    });
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }
}

