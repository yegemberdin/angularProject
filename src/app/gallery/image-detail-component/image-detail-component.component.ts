import {Component, OnInit} from '@angular/core';
import {ImgServiceService} from '../../services/img-service.service';
import {ActivatedRoute} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-image-detail-component',
  animations: [
    trigger('rotatedState', [
      state('default', style({transform: 'rotate(0)'})),
      state('rotated', style({transform: 'rotate(-360deg)'})),
      transition('rotated => default', animate('1500ms ease-out')),
      transition('default => rotated', animate('1200ms ease-in'))
    ])
  ],
  templateUrl: './image-detail-component.component.html',
  styleUrls: ['./image-detail-component.component.css']
})

export class ImageDetailComponentComponent implements OnInit {
  image: any;
  currentDate: any;
  showComment = false;
  comments = [];
  changedComment = '';
  state: string = 'default';
  hasComments = false;
  numberOfLikes = 0;

  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

  constructor(private imageService: ImgServiceService, private route: ActivatedRoute) {
    this.currentDate = 'Sat Nov 29 2019 16:46:37 GMT+0600 (Восточный Казахстан)';
  }

  ngOnInit() {
    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id']
    );
    let id = this.route.snapshot.params['id'];
    if (localStorage.getItem('comments' + id) === null) {
      this.hasComments = false;
    } else {
      let retrievedData = localStorage.getItem('comments' + id);
      let retrievedComments = JSON.parse(retrievedData) as Array<string>;
      this.comments = retrievedComments;
      this.hasComments = true;
    }

    if (localStorage.getItem('likes' + id) === null) {
      this.numberOfLikes = 0;
    } else {
      let retrievedData = localStorage.getItem('likes' + id);
      let retrievedLikes = JSON.parse(retrievedData) as Array<string>;
      let quantity = retrievedLikes.length;
      this.numberOfLikes = quantity;
    }
  }

  onCommentChange(event) {
    this.changedComment = event.target.value;
  }

  changeComment() {
    this.hasComments = true;
    let id = this.route.snapshot.params['id'];
    if (localStorage.getItem('comments' + id) === null) {
      let comments = [];
      comments.push(this.changedComment);
      this.comments = comments;
      localStorage.setItem('comments' + id, JSON.stringify(comments));
    } else {
      let retrievedData = localStorage.getItem('comments' + id);
      let retrievedComments = JSON.parse(retrievedData) as Array<string>;
      localStorage.removeItem('comments' + id);
      retrievedComments.push(this.changedComment);
      localStorage.setItem('comments' + id, JSON.stringify(retrievedComments));
      this.comments = retrievedComments;
    }
  }

  like() {
    let id = this.route.snapshot.params['id'];
    let user = JSON.parse(localStorage.getItem('currentUser'));
    let username = user.username;
    if (localStorage.getItem('likes' + id) === null) {
      let likes = [];
      likes.push(username);
      let likesN = 1;
      this.numberOfLikes = likesN;
      localStorage.setItem('likes' + id, JSON.stringify(likes));
      window.confirm('you have liked this image');

    } else {
      let retrievedData = localStorage.getItem('likes' + id);
      let retrievedLikes = JSON.parse(retrievedData) as Array<string>;
      let duplicate = false;
      retrievedLikes.forEach((usernameFrom, index) => {
        if (usernameFrom.toString() === username) {
          duplicate = true;
        } else {
          duplicate = false;
        }
      });
      if (duplicate) {
        window.confirm('you have already liked this image');
      } else {
        let quantity = retrievedLikes.length;
        localStorage.removeItem('likes' + id);
        let newNumberOfLikes = quantity + 1;
        retrievedLikes.push(username);
        localStorage.setItem('likes' + id, JSON.stringify(retrievedLikes));
        this.numberOfLikes = newNumberOfLikes;
        window.confirm('you have liked this image');
      }
    }
  }

  addImage() {
    let id = this.route.snapshot.params['id'];
    let user = JSON.parse(localStorage.getItem('currentUser'));
    let username = user.username;
    if (localStorage.getItem('myImages' + username) === null) {
      let imgs = [];
      imgs.push(this.image);
      localStorage.setItem('myImages' + username, JSON.stringify(imgs));
      window.confirm('Image added to your profile');
    } else {
      let retrievedData = localStorage.getItem('myImages' + username);
      let retrievedMyImages = JSON.parse(retrievedData);
      let duplicate = false;
      retrievedMyImages.forEach((image, index) => {
        if (image.id.toString() === id) {
          duplicate = true;
        } else {
          duplicate = false;
        }
      });
      if (duplicate) {
        window.confirm('you have already this image');
      } else {
        localStorage.removeItem('myImages' + username);
        retrievedMyImages.push(this.image);
        localStorage.setItem('myImages' + username, JSON.stringify(retrievedMyImages));
        window.confirm('Image added to your profile');
      }
    }
  }

}
