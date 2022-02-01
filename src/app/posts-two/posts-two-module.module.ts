import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostTwoComponent } from '../post-two/post-two.component';
import { PostTwoService } from '../services/post-two.service';
import { SharedModule } from '../shared/shared.module';
import { PostsTwoComponent } from './posts-two.component';

const postsTwoRoute: Routes = [
  {path: '', component: PostsTwoComponent},
  {path: ':id', component: PostTwoComponent},
]

@NgModule({
  declarations: [
    PostsTwoComponent,
    PostTwoComponent
  ],
  providers: [
    PostTwoService
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(postsTwoRoute)
  ],
  exports: [
    SharedModule,
    RouterModule
  ]
})

export class PostsTwoModuleModule {}
