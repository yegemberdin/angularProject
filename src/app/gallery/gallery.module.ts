import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryRoutingModuleModule } from './gallery-routing-module.module';
import {ImgServiceService} from '../services/img-service.service';
import {ImageFilterPipe} from '../shared/filter.pipe';
import {UserDataService} from '../services/user-data.service';
import { ImageDetailComponentComponent } from './image-detail-component/image-detail-component.component';
import {DateFormatPipe} from '../shared/date-format.pipe';

@NgModule({
  declarations: [GalleryComponent, ImageFilterPipe, ImageDetailComponentComponent, DateFormatPipe],
  imports: [
    CommonModule,
    GalleryRoutingModuleModule
  ],
  providers: [ImgServiceService, ImageFilterPipe, DateFormatPipe]
})
export class GalleryModule { }
