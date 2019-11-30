import { Component, OnInit } from '@angular/core';
import {ImgServiceService} from '../../services/img-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-image-detail-component',
  templateUrl: './image-detail-component.component.html',
  styleUrls: ['./image-detail-component.component.css']
})

export class ImageDetailComponentComponent implements OnInit {
  image: any;
  currentDate: any;
  showComment = false;
  comment = '';
  changedComment = '';
  
  constructor(private imageService: ImgServiceService, private route: ActivatedRoute) {
    this.currentDate = 'Sat Nov 29 2019 16:46:37 GMT+0600 (Восточный Казахстан)';
  }

  ngOnInit() {
    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id']
    )
    this.comment = this.image.comment;
  }

  onCommentChange(event) {
    this.changedComment = event.target.value;
  }

  changeComment() {
    this.comment = this.changedComment
    this.imageService.setComment(+this.route.snapshot.params['id'], this.comment);
  }

}
