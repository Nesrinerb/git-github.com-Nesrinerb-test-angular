import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddService } from '../add.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  constructor(private _fb: FormBuilder, private addService: AddService) {}

  ngOnInit(): void {}
  addForm = this._fb.group({
    titre: ['', [Validators.required]],
    description: ['', [Validators.required]],
    categorie: ['', [Validators.required]],
    date: ['', [Validators.required]],
  });

  get titre() {
    return this.addForm.get('titre');
  }
  get description() {
    return this.addForm.get('description');
  }
  get categorie() {
    return this.addForm.get('categorie');
  }
  get date() {
    return this.addForm.get('date');
  }

  sendPost() {
    console.log(this.addForm.value);
    this.addService.addPost(this.addForm.value).subscribe(
      (response) => console.log('success', response),
      (error) => console.error('error!', error)
    );
  }
}
