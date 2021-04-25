import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OtpComponent} from './otp.component';
import { AppMaterialModule } from '../app.material.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [OtpComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    OtpComponent
  ]
})
export class OtpModule {
}
