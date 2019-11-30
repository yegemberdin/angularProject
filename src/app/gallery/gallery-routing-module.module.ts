import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GalleryComponent} from './gallery/gallery.component';
import {ImageDetailComponentComponent} from './image-detail-component/image-detail-component.component';

const galleryRoutes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'image/:id', component: ImageDetailComponentComponent },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(galleryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GalleryRoutingModuleModule { }
