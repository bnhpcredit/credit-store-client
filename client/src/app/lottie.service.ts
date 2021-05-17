import { Injectable } from "@angular/core";
import { AnimationOptions } from "ngx-lottie";

@Injectable({
  providedIn: "root",
})
export class LottieService {

  get nextArrow() {
    return {
      path: "/assets/lotties/lf30_editor_nvz11yz5.json",
      loop: true,
    };
  }

  get prevArrow() {
    return {
      path: "/assets/lotties/lf30_editor_nvz11yz5.json",
      loop: true,
    };
  }

  get sendAgain() {
    return {
      path: "/assets/lotties/lf30_editor_6hqdsihd.json",
      loop: true,
    };
  }
  constructor() {}
}
