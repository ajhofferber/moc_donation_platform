import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { SubmitComponent } from '../submit/submit.component';
import { WelcomeComponent } from '../welcome/welcome.component';

import { ApiService } from '../../service/api.service';

import { RouterModule } from '@angular/router'
import { appRoutes } from './../../app.router';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    SubmitComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
