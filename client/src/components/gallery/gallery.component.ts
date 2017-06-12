import { Component, Input, OnInit } from '@angular/core';

import { ApiService } from '../../service/api.service';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})

class GalleryComponent implements OnInit{
  public artifacts: any[];
  private  error: any;

  constructor(private api: ApiService) {
    console.log('i am gallery');
    console.log('this is the api: ', api);
  }

  getArtifacts = () => {
    this.api
        .getArtifacts()
        .then(artifacts => this.artifacts = artifacts)
        .then(artifacts  => console.log(artifacts))
        .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getArtifacts();
  }
  // private loadGalleryStuff = ():void => {
  //   let self = this;
  //   this.api.getStuff().then((res) => {
  //     //do stuff with res
  //     self.artifacts = res.data;
  //   });
  //
  // }


}

export {
  GalleryComponent
}
