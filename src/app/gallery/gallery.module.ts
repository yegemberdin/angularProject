import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryRoutingModuleModule } from './gallery-routing-module.module';
import {ImgServiceService} from '../img-service.service';
import {ImageFilterPipe} from '../filter.pipe';
import {UserDataService} from '../user-data.service';

@NgModule({
  declarations: [GalleryComponent, ImageFilterPipe],
  imports: [
    CommonModule,
    GalleryRoutingModuleModule
  ],
  providers: [ImgServiceService]
})
export class GalleryModule { }
