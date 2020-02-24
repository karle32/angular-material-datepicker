import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatepickerRoutingModule } from './datepicker-routing.module';
import { DatepickerComponent } from './datepicker.component';

import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
  declarations: [DatepickerComponent],
  imports: [
    DatepickerRoutingModule,
    CommonModule,
    AngularMaterialModule
  ]
})
export class DatepickerModule { }
