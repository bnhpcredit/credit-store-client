import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro.component';
import {AppMaterialModule} from '../app.material.module';



@NgModule({
  declarations: [IntroComponent],
    imports: [
        CommonModule,
        AppMaterialModule
    ],
  exports: [IntroComponent]
})
export class IntroModule { }
