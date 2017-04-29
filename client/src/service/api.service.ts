import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
class ApiService {

  private baseUrl = 'http://127.0.0.1:8000/api/selected_artifacts';
  constructor(public http: Http) {}

  public get(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let headers = {
        Accept: 'application/json'
      };
      this.send('GET', url, headers).then((res) => {
        resolve(res);
      }).catch((ex) => {
        reject(ex);
      });
    });
  }

  public send(method: string, uri: string, headers?: any, body?: string, isJson = true): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = this.baseUrl + uri;
      let requestOptions = new RequestOptions({
        body,
        headers: new Headers(headers),
        method
      });
      this.http.request(url, requestOptions).subscribe((res) =>{
        if(isJson === true) {
          resolve(res.json());
        } else {
          resolve(res);
        }
      }, (err) => {
        reject(err);
      });
    });
  }

  public getStuff(): Promise<any> {
    return this.get('');
  }

}

export {
  ApiService
}
