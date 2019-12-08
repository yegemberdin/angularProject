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
    let id = this.route.snapshot.params['id']
    if (localStorage.getItem('comments' + id) === null) {
      this.hasComments = false;
    } else {
      let retrievedData = localStorage.getItem('comments' + id);
      let retrievedComments = JSON.parse(retrievedData) as Array<string>;
      this.comments = retrievedComments
      this.hasComments = true;
    }
  }

  onCommentChange(event) {
    this.changedComment = event.target.value;


  }

  changeComment() {
    this.hasComments = true
    let id = this.route.snapshot.params['id']
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
    // this.imageService.setComment(id, this.comment);
  }

}
