import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    MatCheckboxModule,
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    MatListModule,
    MatDialogModule
  ]
})

export class MaterialModule { }