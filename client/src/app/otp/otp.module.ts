import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OtpComponent} from './otp.component';
import { AppMaterialModule } from '../app.material.module';


@NgModule({
  declarations: [OtpComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    OtpComponent
  ]
})
export class OtpModule {
}
