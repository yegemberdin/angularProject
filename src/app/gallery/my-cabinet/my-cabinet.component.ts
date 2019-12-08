import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cabinet',
  templateUrl: './my-cabinet.component.html',
  styleUrls: ['./my-cabinet.component.css']
})
export class MyCabinetComponent implements OnInit {
  myImages = [];
  hasMyImages = false;


  constructor() { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    let username = user.username
    if (localStorage.getItem('myImages' + username) === null) {
      this.hasMyImages = false;
    } else {
      let retrievedData = localStorage.getItem('myImages' + username);
      let retrievedMyImages = JSON.parse(retrievedData);
      this.myImages = retrievedMyImages;
      this.hasMyImages = true;
    }
  }

}
