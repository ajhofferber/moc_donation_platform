import { Routes, RouterModule } from '@angular/router';

import {
  AboutComponent,
  GalleryComponent,
  SubmitComponent,
  WelcomeComponent
 } from 'components/index';

const appRoutes: Routes = [
  {
    path: 'thanks',
    component: AboutComponent
  }, {
    path: 'submit',
    component: SubmitComponent
  }, {
    path: 'about',
    component: GalleryComponent
  }, {
    path: '',
    component: WelcomeComponent
  },
]

export {
  appRoutes
}
