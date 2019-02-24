import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversitiesList } from '../shared/_models/univLists.model';
import { CategoryLinkLists } from '../shared/_models/categoryLists.model';
import { UniversitiesService } from '../services/universities.service';

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.scss']
})
export class CollegesComponent implements OnInit {


 title='colleges';  

 universitiesCount: any;
 univeristyData: any;
 stateCode: any;

  topCategoryLinks: CategoryLinkLists[] = [
  new CategoryLinkLists('agriculture'),
  new CategoryLinkLists('architecture'),
  new CategoryLinkLists('arts'),
  new CategoryLinkLists('aviation'),
  new CategoryLinkLists('management'),
  new CategoryLinkLists('commerce'),
  new CategoryLinkLists('computer applications'),
  new CategoryLinkLists('dental'),
  new CategoryLinkLists('design'),
  new CategoryLinkLists('education'),
  new CategoryLinkLists('engineering'),
  new CategoryLinkLists('hotel management'),
  new CategoryLinkLists('law')];
  

  constructor( private universitiesService: UniversitiesService, private router: Router) { }

  ngOnInit(){   

   this.getUniversityCount();  

 
   this.universitiesService.getUniversitiesCount()
   .subscribe(universitiesCount => {
        this.universitiesCount = universitiesCount;
        console.log(this.universitiesCount , 'orders data');
   });

 }

   
  getUniversityCount(){

    this.universitiesService.getUniversitiesCount().subscribe(
      universitiesCount => {
          this.universitiesCount = universitiesCount;
          console.log(this.universitiesCount , 'unicount');  

          this.univeristyData = this.universitiesCount.data.universityCounts;
          console.log(this.univeristyData , 'data');  
          
      },

      (error) => console.log(error)
    );
  }  

  viewDetail(state){
    console.log(state);
    this.router.navigate(['/state-colleges', state]);
  } 

}

