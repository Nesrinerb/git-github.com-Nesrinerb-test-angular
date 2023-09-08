import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';
import { post } from '../post';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css'],
})
export class ListPostComponent implements OnInit {
  postArray: post[] = [];
  constructor(private _addService: AddService, private _router: Router) {}
  ngOnInit(): void {
    this.addPost();
  }
  addPost() {
    this._addService.getPost().subscribe((data) => (this.postArray = data));
  }
  delete(i: number) {
    this._addService.deletePost(i);
    this.postArray.splice(i, 1);
  }
  updatePost(post: post) {
    this._router.navigate(['/update-post', post.id]);
  }
}
