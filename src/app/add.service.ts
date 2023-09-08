import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { post } from './post';
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
  deletePost(post: post | number): Observable<any> {
    const id = typeof post === 'number' ? post : post.id;
    const url = this._url + '/' + id;
    return this._http.delete(url);
  }
}
