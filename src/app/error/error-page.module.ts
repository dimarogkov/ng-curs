import { NgModule } from '@angular/core';
import { ErrorComponent } from './error.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const errorPageRoute: Routes = [
  {path: '', component: ErrorComponent}
]

@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(errorPageRoute)
  ],
  exports: [
    RouterModule
  ]
})

export class ErrorPageModule {}
