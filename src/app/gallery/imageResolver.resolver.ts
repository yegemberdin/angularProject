import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import {ImgServiceService} from '../services/img-service.service';

@Injectable()
export class ImageResolverResolver implements Resolve<any> {
  constructor(private imageService: ImgServiceService) {}

  resolve() {
    return this.imageService.getImages();
  }
}
