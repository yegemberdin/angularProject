import {Injectable} from '@angular/core';
import * as $ from 'jquery';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImgServiceService {
  visibleImages = [];


  getImages() {

    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number) {

    return IMAGES.slice(0).find(image => image.id === id);
  }

  setComment(id: number, comment: string) {
    IMAGES.forEach((image, index) => {
      if (image.id === id) {
        image.comment = comment
        console.log("comment changed")
      }
    });

  }

}

const IMAGES = [
  {
    'id': 1,
    'category': 'boats',
    'caption': 'View from the boat',
    'url': 'https://www.incimages.com/uploaded_files/image/970x450/getty_583734066_335273.jpg',
    'createdDate': 'Sat Nov 18 2019 16:40:37 GMT+0600 (Восточный Казахстан)',
    'comment': 'I was here with my family'
  },
  {
    'id': 2,
    'category': 'boats',
    'caption': 'Sailing the coast',
    'url': 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'createdDate': 'Sat Nov 28 2019 13:40:37 GMT+0600 (Восточный Казахстан)',
    'comment': 'I was here with my friends'

  },
  {
    'id': 3,
    'category': 'boats',
    'caption': 'The water was nice',
    'url': 'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg',
    'createdDate': 'Sat Jan 19 2018 19:40:37 GMT+0600 (Восточный Казахстан)',
    'comment': 'I was here with my classmates'

  },
  {
    'id': 4,
    'category': 'boats',
    'caption': 'Cool water cavern',
    'url': 'https://media.gadventures.com/media-server/dynamic/admin/content_pages/africa-tilex.jpg',
    'createdDate': 'Sat Nov 18 2019 16:40:37 GMT+0600 (Восточный Казахстан)',
    'comment': 'I was here with my hunny'
  },
  {
    'id': 5,
    'category': 'boats',
    'caption': 'Sunset at the docks',
    'url': 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fnomanazish%2Ffiles%2F2018%2F01%2Ftravel-1749508_1280-1200x766.jpg',
    'createdDate': 'Sat Nov 18 2019 16:40:37 GMT+0600 (Восточный Казахстан)',
    'comment': 'I was here with my classmates'

  },
  {
    'id': 6,
    'category': 'camping',
    'caption': 'Camping Trip \'17\'',
    'url': 'https://www.godsavethepoints.com/wp-content/uploads/2019/03/84721339_m.jpg',
    'createdDate': 'Sat Nov 18 2019 11:40:37 GMT+0600 (Восточный Казахстан)',
    'comment': 'I was here with my classmates'

  },
  {
    'id': 7,
    'category': 'camping',
    'caption': 'Kim and Jessie',
    'url': 'https://www.eturbonews.com/wp-content/uploads/2018/11/adventure.jpg',
    'createdDate': 'Sat Nov 28 2019 13:40:37 GMT+0600 (Восточный Казахстан)',
    'comment': 'I was here with my groupmates'

  },
  {
    'id': 8,
    'category': 'camping',
    'caption': 'View from the top',
    'url': 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fnomanazish%2Ffiles%2F2018%2F01%2Ftravel-1749508_1280-1200x766.jpg',
    'createdDate': 'Sat Nov 28 2019 13:40:37 GMT+0600 (Восточный Казахстан)',
    'comment': 'It was amazing'

  },
  {
    'id': 13,
    'category': 'library',
    'caption': 'Big library',
    'url': 'https://www.statravel.com/static/us_division_web_live/assets/sta-travel-default-min.jpg',
    'createdDate': 'Sat Nov 28 2019 13:40:37 GMT+0600 (Восточный Казахстан)',
    'comment': 'It was gorgeous'

  },
  {
    'id': 14,
    'category': 'library',
    'caption': 'Stacks',
    'url': 'https://image.shutterstock.com/image-photo/europe-travel-vacation-fun-summer-260nw-1048935941.jpg',
    'createdDate': 'Sat Nov 18 2019 16:40:37 GMT+0600 (Восточный Казахстан)',
    'comment': 'It was interesting!'

  },
  {
    'id': 16,
    'category': 'library',
    'caption': 'Local library',
    'url': 'https://cdn.pixabay.com/photo/2016/01/13/01/36/bagan-1137015__340.jpg',
    'createdDate': 'Sat Nov 18 2019 16:40:37 GMT+0600 (Восточный Казахстан)',
    'comment': 'I liked this trip'

  }
];

