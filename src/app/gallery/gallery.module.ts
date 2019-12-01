import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryRoutingModuleModule } from './gallery-routing-module.module';
import {ImgServiceService} from '../services/img-service.service';
import {ImageFilterPipe} from '../shared/filter.pipe';
import {UserDataService} from '../services/user-data.service';
import { ImageDetailComponentComponent } from './image-detail-component/image-detail-component.component';
import {DateFormatPipe} from '../shared/date-format.pipe';
import { ImageBoxShadowDirective } from './directives/image-box-shadow.directive';
import { CommentOpenDirective } from './directives/comment-open.directive';
import {NgxStarsModule} from 'ngx-stars';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [GalleryComponent, ImageFilterPipe, ImageDetailComponentComponent, DateFormatPipe, ImageBoxShadowDirective, CommentOpenDirective],
  imports: [
    CommonModule,
    GalleryRoutingModuleModule,
    NgxStarsModule,
  ],
  providers: [ImgServiceService, ImageFilterPipe, DateFormatPipe]
})
export class GalleryModule { }
