import { Component, Input } from '@angular/core';

import { ApiService } from '../../service/api.service';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})

class GalleryComponent {
  public artifacts: any[] = [{img: 'someurl', title: 'taco'}];
  constructor(private api: ApiService) {
    console.log('i am gallery');
    console.log('this is the api: ', api);
  }

  private loadGalleryStuff = ():void => {
    let self = this;
    this.api.getStuff().then((res) => {
      //do stuff with res
      self.artifacts = res.data;
    });

  }


}

export {
  GalleryComponent
}
