import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdNumberComponent } from './id-number.component';



@NgModule({
  declarations: [IdNumberComponent],
  imports: [
    CommonModule
  ],
  exports: [IdNumberComponent]
})
export class IdNumberModule { }
