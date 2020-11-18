import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSelectModule
  ]
})

export class MaterialModule { }