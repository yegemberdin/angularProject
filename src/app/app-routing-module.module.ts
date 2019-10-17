import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module')
      .then(mod => mod.GalleryModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(mod => mod.AuthModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModuleModule { }
