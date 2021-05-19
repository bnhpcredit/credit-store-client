import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OffersListComponent } from "./offers-list.component";
import { AppMaterialModule } from "../app.material.module";
import { ReactiveFormsModule } from "@angular/forms";
import {LottieModule} from "ngx-lottie";

export function playerFactory() {
  return import("lottie-web");
}

@NgModule({
  declarations: [OffersListComponent],
  exports: [OffersListComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    LottieModule.forRoot({
      player: playerFactory,
      useCache: true,
    }),
  ],
})
export class OffersListModule {}
