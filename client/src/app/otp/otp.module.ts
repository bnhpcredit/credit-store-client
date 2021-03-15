import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OtpComponent} from './otp.component';


@NgModule({
  declarations: [OtpComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OtpComponent
  ]
})
export class OtpModule {
}
