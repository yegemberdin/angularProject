import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {ImgServiceService} from '../../services/img-service.service';
import {User} from '../../User';
import {UserDataService} from '../../services/user-data.service';
import {UserService} from '../../services/user.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {first} from 'rxjs/operators';
import {GalleryService} from '../../services/gallery.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-gallery',
  animations: [
    trigger('balloonEffect', [
      state('initial', style({
        transform: 'scale(1)'
      })),
      state('final', style({
        transform: 'scale(1.5)'
      })),
      transition('final=>initial', animate('1000ms')),
      transition('initial=>final', animate('1500ms'))
    ])
  ],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnChanges, OnInit {
  filterBy?: string = 'all';
  visibleImages: any  = [];
  public user: string;
  public loggedIn: boolean = false;
  currentState1 = 'initial';
  currentState2 = 'initial';
  currentState3 = 'initial';
  currentState4 = 'initial';
  loading = false;


  changeState1() {
    this.currentState1 = this.currentState1 === 'initial' ? 'final' : 'initial';
    this.currentState2 = this.currentState2 === 'final' ? 'initial' : 'initial';
    this.currentState3 = this.currentState3 === 'final' ? 'initial' : 'initial';
    this.currentState4 = this.currentState4 === 'final' ? 'initial' : 'initial';

  }

  changeState2() {
    this.currentState2 = this.currentState2 === 'initial' ? 'final' : 'initial';
    this.currentState1 = this.currentState1 === 'final' ? 'initial' : 'initial';
    this.currentState3 = this.currentState3 === 'final' ? 'initial' : 'initial';
    this.currentState4 = this.currentState4 === 'final' ? 'initial' : 'initial';
  }

  changeState3() {
    this.currentState3 = this.currentState3 === 'initial' ? 'final' : 'initial';
    this.currentState1 = this.currentState1 === 'final' ? 'initial' : 'initial';
    this.currentState2 = this.currentState2 === 'final' ? 'initial' : 'initial';
    this.currentState4 = this.currentState4 === 'final' ? 'initial' : 'initial';
  }

  changeState4() {
    this.currentState4 = this.currentState4 === 'initial' ? 'final' : 'initial';
    this.currentState1 = this.currentState1 === 'final' ? 'initial' : 'initial';
    this.currentState2 = this.currentState2 === 'final' ? 'initial' : 'initial';
    this.currentState3 = this.currentState3 === 'final' ? 'initial' : 'initial';
  }

  constructor(private imageService: ImgServiceService, private userService: UserDataService, private galleryService: GalleryService, private router: Router, private route: ActivatedRoute) {
    this.userService.userData$.subscribe((data) => {
      this.user = data;
      if (this.user !== 'anonymous') {
        this.loggedIn = true;
      }

    });
    console.log('nazeka');
    console.log(this.route.snapshot.data)

    this.visibleImages = this.route.snapshot.data.images;

  }

  ngOnInit(): void {
    this.galleryService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
    });
    if (this.user === 'anonymous') {
      let user = JSON.parse(localStorage.getItem('currentUser'));
      let username = user.username;
      this.user = username;
    }

  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }

}

