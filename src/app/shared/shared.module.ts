import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StyleDirective } from '../directives/style.directive';
import { MinusPipe } from '../myPipes/minus.pipe';
import { PlusPipe } from '../myPipes/plus.pipe';

@NgModule({
  declarations: [
    PlusPipe,
    MinusPipe,
    StyleDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PlusPipe,
    MinusPipe,
    StyleDirective,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class SharedModule {}
