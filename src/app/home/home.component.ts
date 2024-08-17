import { Component,AfterViewInit, ViewChild, ElementRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) {}

  scrollToElement(id: string): void {
    this.router.navigate([], { fragment: id });
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
  
  mouseX: number = 0;
  prevPercentage:number=0;
  percentage:number=0;
  mouseDown:boolean=false;


 trackPositionStyle = {
 
 }

 carouselImagePos = {
   'object-position': '100%',
    'transition': 'transform 1200ms ease-out'
 };

 onMouseUp(event: MouseEvent): void {
  this.mouseDown = false;
  this.prevPercentage=this.percentage;
}

 onMouseDown(event: MouseEvent):void{
  this.mouseX=event.clientX;
  this.mouseDown = true;
 }

 onMouseMove(event: MouseEvent):void{
  if(!this.mouseDown){
    return;
  }
  const mouseDelta=this.mouseX - event.clientX;
  let maxDelta=window.innerWidth/2;

  this.percentage=(mouseDelta / maxDelta)*(-100);
  let nextPercentage=this.prevPercentage+this.percentage;

  this.percentage=nextPercentage;

    nextPercentage = Math.min(nextPercentage, 10);
    nextPercentage = Math.max(nextPercentage, -65);
 

  this.trackPositionStyle = {
    'transform':'translate('+nextPercentage+'%,0%)',
    'transition': 'transform 1200ms ease-out'
   }

   this.carouselImagePos = {
    'object-position': +(nextPercentage+100)+'%',
    'transition': 'transform 1200ms ease-out'
   }
 }
}
