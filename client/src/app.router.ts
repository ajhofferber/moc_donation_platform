import { Routes, RouterModule } from '@angular/router';

import {
  AboutComponent,
  GalleryComponent,
  SubmitComponent,
  WelcomeComponent
 } from 'components/index';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'submit',
    component: SubmitComponent
  }, {
    path: 'gallery',
    component: GalleryComponent
  }, {
    path: '',
    component: WelcomeComponent
  },
]

export {
  appRoutes
}
