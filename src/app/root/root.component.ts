import { Component,HostListener,Inject,PLATFORM_ID  } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule,isPlatformBrowser  } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'] // Corrected to styleUrls
})



export class RootComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: object){}
  
  windowWidth:number=0;
  ngOnInit() {
 
    if(isPlatformBrowser(this.platformId)){
      this.windowWidth=window.innerWidth;
    }
    
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if(isPlatformBrowser(this.platformId)){
      this.windowWidth=window.innerWidth;
    }
   
  }

 
  mouseX:number = 0;
  mouseY:number = 0;
  trueValue=true;

 
  get adjustedX(): number {
    return this.mouseX + (this.isBrowser() ? window.scrollX : 0);
  }

  get adjustedY(): number {
    return this.mouseY + (this.isBrowser() ? window.scrollY : 0);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isBrowser()) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if(this.isBrowser()){
      this.mouseX = this.mouseX; 
    this.mouseY = this.mouseY;
    }
    
    
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
