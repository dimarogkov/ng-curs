import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const formPageRoute: Routes = [
  {path: '', component: FormComponent}
]

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(formPageRoute)
  ],
  exports: [
    RouterModule
  ]
})

export class FormPageModule {}
