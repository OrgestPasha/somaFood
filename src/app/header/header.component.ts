import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { RouterModule,Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HomeComponent,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  constructor(private router: Router) {}

  scrollToElement(id: string): void {
    this.router.navigate([], { fragment: id });
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }



  showDropdown:boolean=false;
  
  dropdownListActive = {
    
  'z-index':'2',
   'transform':'translate(5px ,100px)',
   'transition': 'all 700ms ease-out',
    
  };

  dropdownListPassive = {
      'opacity':'1',
    'transform':'translateY(-100px)',
    'transition': 'all 700ms ease-out',

   
  };

  handeDropDownClick=()=>{
    this.showDropdown=!this.showDropdown;
  }


  

}
