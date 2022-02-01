import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RxJsComponent } from './rx-js.component';

const rxJsRoute: Routes = [
  {path: '', component: RxJsComponent}
]

@NgModule({
  declarations: [
    RxJsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(rxJsRoute)
  ],
  exports: [
    RouterModule
  ]
})

export class RxJsModuleModule {}
