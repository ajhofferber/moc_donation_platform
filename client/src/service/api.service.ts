import { Injectable } from '@angular/core';
import { Artifact } from '../components/submit/submit.models';
import { Http, Headers, RequestOptions } from '@angular/http';
import { API_URL } from './constants';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {
    constructor (private http: Http) {}
    private apiUrl = API_URL + '/api/artifacts/';

    getArtifacts() {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.get(this.apiUrl, {headers: headers})
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    private handleError(error: any) {
      console.error('an error occured', error);
      return Promise.reject(error.message || error)
    }

    postArtifact(body: Artifact): Promise<Artifact>{
      console.log(body)
      let bodyString = JSON.stringify(body); // Stringify payload
      console.log("STRING", bodyString)
      // console.log(this.http.post(this.commentsUrl, bodyString))
      let headers = new Headers(); // ... Set content type to JSON
      headers.append('Content-Type', 'application/json');
      // let options = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.apiUrl, bodyString, {headers: headers})
          .toPromise()
          .then(res => res.json().data as Artifact)
          .catch(this.handleError);
     }
}




// import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions } from '@angular/http';
//
// @Injectable()
// class ApiService {
//
//   private baseUrl = 'http://127.0.0.1:8000/api/selected_artifacts';
//   constructor(public http: Http) {}
//
//   public get(url: string): Promise<any> {
//     return new Promise((resolve, reject) => {
//       let headers = {
//         Accept: 'application/json'
//       };
//       this.send('GET', url, headers).then((res) => {
//         resolve(res);
//       }).catch((ex) => {
//         reject(ex);
//       });
//     });
//   }
//
//   public send(method: string, uri: string, headers?: any, body?: string, isJson = true): Promise<any> {
//     return new Promise((resolve, reject) => {
//       let url = this.baseUrl + uri;
//       let requestOptions = new RequestOptions({
//         body,
//         headers: new Headers(headers),
//         method
//       });
//       this.http.request(url, requestOptions).subscribe((res) =>{
//         if(isJson === true) {
//           resolve(res.json());
//         } else {
//           resolve(res);
//         }
//       }, (err) => {
//         reject(err);
//       });
//     });
//   }
//
//   public getStuff(): Promise<any> {
//     return this.get('');
//   }
//
// }
//
// export {
//   ApiService
// }
