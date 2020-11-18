import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { NgOtpInputModule } from 'ng-otp-input';
import { Ng5SliderModule } from 'ng5-slider';
import { ChatSectionComponent } from './chat-section/chat-section.component';
import { DeviceDetectorModule } from 'ngx-device-detector';


@NgModule({
  declarations: [
    AppComponent,
    ChatSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    MatCheckboxModule,
    Ng5SliderModule,
    MatDatepickerModule,
    MatSelectModule,
    DeviceDetectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
