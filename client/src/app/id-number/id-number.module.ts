import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdNumberComponent } from './id-number.component';
import { AppMaterialModule } from '../app.material.module';



@NgModule({
  declarations: [IdNumberComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [IdNumberComponent]
})
export class IdNumberModule { }
