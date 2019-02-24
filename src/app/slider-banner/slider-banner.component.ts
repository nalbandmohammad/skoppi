import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-slider-banner',
  templateUrl: './slider-banner.component.html',
  styleUrls: ['./slider-banner.component.scss']
})
export class SliderBannerComponent implements OnInit {

  statesList = ['Anhdra Pradesh','Telangana','Maharashtra','Karnataka'];

  citiesList = ['Anantapur','Hyderabad','Mumbai','Bangalore'];

  constructor() { }

  ngOnInit() {
  }

  // viewSchoolsData(){ 
  // console.log('schools tab');   
  //   this.router.navigate(['/category-schools']);
  // } 

}
