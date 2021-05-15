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
import { httpInterceptorProviders } from './http-interceptors';
import { HomePageComponent } from './intro/home-page/home-page.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LottieModule } from 'ngx-lottie';
import { OffersListModule } from "./offers-list/offers-list.module";
import { StepperComponent } from './stepper/stepper.component';
import { MatNativeDateModule } from '@angular/material/core';
import { OtpComponent } from './otp/otp.component';
import { IdNumberComponent } from './id-number/id-number.component';


export function playerFactory() {
  return import('lottie-web');
}
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StepperComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatNativeDateModule,
        AppMaterialModule,
        BrowserAnimationsModule,
        LottieModule.forRoot({
            player: playerFactory,
            useCache: true
        }),
        IntroModule, IdNumberModule, OtpModule, QueriesModule, LoanDetailsModule, MdbModule, OffersListModule
    ],
  providers: [httpInterceptorProviders],
  entryComponents: [StepperComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
