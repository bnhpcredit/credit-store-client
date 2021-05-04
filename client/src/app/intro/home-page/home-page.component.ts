import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { AnimationItem } from "lottie-web";
import { Slider } from "./slider.model";
@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent{
  @Output() next = new EventEmitter<void>();

  mouseover = false;
  sliders: Slider[] = [
    {
      options: {
        path: "/assets/lotties/2523-loading-traveling.json",
        loop: true,
      },
      title: 'לטוס לחו"ל',
      whiteMode:true
    },
    {
      options: {
        path: "/assets/lotties/25200-student.json",
        loop: true,
      },
      title: "ללמוד",
      whiteMode:true
    },
    {
      options: {
        path:
          "/assets/lotties/24185-buying-a-property-ed-najarro-painter2.json",
        loop: true,
      },
      title: "לשפץ",
      whiteMode:false
    },
    {
      options: {
        path: "/assets/lotties/help.json",
        loop: true,
      },
      title: "לעזור",
      whiteMode:true
    },
    {
      options: {
        path: "/assets/lotties/payment.json",
        loop: true,
      },
      title: "לסגור חוב",
      whiteMode:false

    },
    {
      options: {
        path: "/assets/lotties/39387-business-team.json",
        loop: true,
      },
      title: "לפתוח עסק",
      whiteMode:true
    },
    {
      options: {
        path: "/assets/lotties/fullfill-dream.json",
        loop: true,
      },
      title: "חלום אחר",
      whiteMode:false
    },
  ];

  dotsSlider: Slider = {
    options: {
      path: "/assets/lotties/dots.json",
      loop: true,
    },
  };

  clickSlider: Slider = {
    options: {
      path: "/assets/lotties/2910-hand-tap.json",
      loop: true,
    },
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  onNext(){
    this.next.emit();
  }
}
