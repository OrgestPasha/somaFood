import { Component, HostListener,Directive  } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule, DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'] // Corrected to styleUrls
})



export class RootComponent {

  


 
  mousePosX:number = 0;
  mousePosY:number = 0;
  trueValue=true;

  blobPosition = {
    left: '0px',
    top: '0px',
  };

  


  onMouseMove(event: MouseEvent): void {
    this.mousePosX = event.clientX + window.scrollX;
    this.mousePosY = event.clientY + window.scrollY;
    this.updateBlobPosition();
  }

  
  onScroll(event: Event): void {
    this.updateBlobPosition();
  }

  updateBlobPosition(): void {
    this.blobPosition = {
      left: this.mousePosX + 'px',
      top: this.mousePosY + 'px',
    };
  }
}
