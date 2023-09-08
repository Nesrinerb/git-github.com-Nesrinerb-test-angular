import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css'],
})
export class UpdatePostComponent {
  constructor(private _fb: FormBuilder) {}

  updateForm = this._fb.group({
    titre: ['', [Validators.required, Validators.minLength(20)]],
    description: ['', [Validators.required]],
    categorie: ['', [Validators.required]],
    date: ['', [Validators.required]],
  });

  get titre() {
    return this.updateForm.get('titre');
  }
  get description() {
    return this.updateForm.get('description');
  }
  get categorie() {
    return this.updateForm.get('categorie');
  }
  get date() {
    return this.updateForm.get('date');
  }
}
