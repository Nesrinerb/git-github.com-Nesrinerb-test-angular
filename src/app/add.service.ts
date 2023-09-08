import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AddService {
  _url = 'http://localhost:3000/posts';
  constructor(private _http: HttpClient) {}
  addPost(postData: any) {
    return this._http.post<any>(this._url, postData);
  }

  getPost(): Observable<any> {
    return this._http.get<any>(this._url);
  }
}
