import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { InfoComponent } from '../info/info.component';
import { CounterService } from '../services/counter.service';
import { PostComponent } from '../post/post.component';
import { PostFormComponent } from '../post-form/post-form.component';
import { SharedModule } from '../shared/shared.module';

const homePageRoute: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: 'info', component: InfoComponent}
  ]}
]

@NgModule({
  declarations: [
    HomeComponent,
    InfoComponent,
    PostComponent,
    PostFormComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(homePageRoute)
  ],
  providers: [
    CounterService
  ],
  exports: [
    RouterModule
  ]
})

export class HomePageModule {}
