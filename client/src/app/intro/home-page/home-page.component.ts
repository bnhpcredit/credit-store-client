import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { Slider } from './slider.model';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  mouseover = false;


  ngOnInit(){
    //this.sliders = this.mouseoutSliders;
  }


  sliders: Slider[] = [ {
    options: {
     path: '/assets/lotties/2523-loading-traveling.json',
     loop: true,
    },
    title: 'לטוס לחו"ל',
  },
  {
    options: {
     path: '/assets/lotties/25200-student.json',
     loop: true,
    },
    title: 'ללמוד',
  },
  {
    options: {
     path: '/assets/lotties/24185-buying-a-property-ed-najarro-painter2.json',
     loop: true
    },
    title: 'לשפץ',
  },
  {
    options: {
     path: '/assets/lotties/help.json',
     loop: true
    },
    title: 'לעזור',

  },
  {
    options: {
     path: '/assets/lotties/payment.json',
     loop: true
    },
    title: 'לסגור חוב',

  },
  {
    options: {
     path: '/assets/lotties/39387-business-team.json',
     loop: true,
    },
    title: 'לפתוח עסק',

  },
  {
    options: {
     path: '/assets/lotties/fullfill-dream.json',
     loop: true,
    },
    title: 'חלום אחר',


  },]




  nextSlider:Slider =  {
    options: {
     path: '/assets/lotties/26866-next-button.json',
     loop: true,
    },
    title: 'המשך',
  }


  clickSlider:Slider =  {
    options: {
     path: '/assets/lotties/10742-hand-tap.json',
     loop: true,
    },
    title: 'המשך',
  }

  nextSliders: Slider[] = [  {
    options: {
     path: '/assets/lotties/26866-next-button.json',
     loop: true,
    },
    title: 'המשך',
  },

  {
    options: {
     path: '/assets/lotties/53969-click.json',
     loop: true,
    },
    title: 'המשך',
  }

]




  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  onMouseover(){
    // alert('Mouseover')
   //  this.sliders = this.mouseoutSliders;

  }

  onMouseout(){
    // alert('Mouseout')
    // this.sliders = this.mouseoverSliders;
  }
}
