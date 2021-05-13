import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersListComponent } from './offers-list.component';
import {AppMaterialModule} from "../app.material.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [OffersListComponent],
  exports: [
    OffersListComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule
  ]
})
export class OffersListModule { }
