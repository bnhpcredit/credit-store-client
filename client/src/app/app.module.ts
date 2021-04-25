import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app.material.module';
import {IntroModule} from './intro/intro.module';
import {IdNumberModule} from './id-number/id-number.module';
import {OtpModule} from './otp/otp.module';
import {QueriesModule} from './queries/queries.module';
import {LoanDetailsModule} from './loan-details/loan-details.module';
import { HomePageComponent } from './intro/home-page/home-page.component';
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
    IntroModule, IdNumberModule, OtpModule, QueriesModule, LoanDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
