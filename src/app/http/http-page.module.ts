import { NgModule } from '@angular/core';
import { HttpComponent } from './http.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { SharedModule } from '../shared/shared.module';

const httpPageRoute : Routes = [
  {path: '', component: HttpComponent}
]

@NgModule({
  declarations: [
    HttpComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(httpPageRoute)
  ],
  providers: [
    TodoService
  ],
  exports: [
    RouterModule
  ]
})

export class HttpPageModule {}
