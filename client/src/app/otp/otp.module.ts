import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OtpComponent} from './otp.component';
import { AppMaterialModule } from '../app.material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { LottieModule } from 'ngx-lottie';

export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  declarations: [OtpComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    LottieModule.forRoot({
      player: playerFactory,
      useCache: true
  }),
  ],
  exports: [
    OtpComponent
  ]
})
export class OtpModule {
}
