import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListPostComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'update-post', component: UpdatePostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
