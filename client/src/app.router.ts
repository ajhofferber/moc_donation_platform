import { Routes, RouterModule } from '@angular/router';

import { 
  GalleryComponent,
  SubmitComponent,
  WelcomeComponent
 } from 'components/index';

const appRoutes: Routes = [
  {
    path: 'submit',
    component: SubmitComponent
  }, {
    path: 'gallery',
    component: GalleryComponent
  }, {
    path: '',
    component: WelcomeComponent
  }
]

export {
  appRoutes
}