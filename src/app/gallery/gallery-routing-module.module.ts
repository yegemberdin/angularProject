import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GalleryComponent} from './gallery/gallery.component';
import {ImageDetailComponentComponent} from './image-detail-component/image-detail-component.component';
import {MyCabinetComponent} from './my-cabinet/my-cabinet.component';
import {ImageResolverResolver} from './imageResolver.resolver';

const galleryRoutes: Routes = [
  { path: '', component: GalleryComponent,
  resolve: { images: ImageResolverResolver }},
  { path: 'image/:id', component: ImageDetailComponentComponent },
  { path: 'myCabinet', component: MyCabinetComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(galleryRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ImageResolverResolver
  ]
})
export class GalleryRoutingModuleModule { }
