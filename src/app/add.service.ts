import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AddService {
  _url = '/src/db.json';
  constructor(private _http: HttpClient) {}
  addPost(postData: any) {
    return this._http.post<any>(this._url, postData);
  }
}
