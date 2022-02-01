import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PipeComponent } from './pipe.component';

const pipePageRoute: Routes = [
  {path: '', component: PipeComponent}
]

@NgModule({
  declarations: [
    PipeComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(pipePageRoute)
  ],
  exports: [
    RouterModule
  ]
})

export class PipePageModule {}
