import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdNumberComponent } from './id-number.component';
import { AppMaterialModule } from '../app.material.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [IdNumberComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  exports: [IdNumberComponent]
})
export class IdNumberModule { }
