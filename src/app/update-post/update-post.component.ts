import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AddService } from '../add.service';
import { post } from '../post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css'],
})
export class UpdatePostComponent implements OnInit {
  initialArray: post[] = [];
  constructor(
    private _fb: FormBuilder,
    private _addService: AddService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // let id = parseInt(this._route.snapshot.paramMap.get('id'));
    this._addService.getPost().subscribe((data) => (this.initialArray = data));
  }

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
