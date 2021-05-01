import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app.material.module';
import {IntroModule} from './intro/intro.module';
import {IdNumberModule} from './id-number/id-number.module';
import {OtpModule} from './otp/otp.module';
import {QueriesModule} from './queries/queries.module';
import {LoanDetailsModule} from './loan-details/loan-details.module';
import { HomePageComponent } from './intro/home-page/home-page.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LottieModule } from 'ngx-lottie';
export function playerFactory() {
  return import('lottie-web');
}
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    LottieModule.forRoot({
      player: playerFactory,
      useCache: true
    }),
    IntroModule, IdNumberModule, OtpModule, QueriesModule, LoanDetailsModule, MdbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
