import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { MainUniversity } from '../../../shared/_models/mainUniversity.model';
import { CategoryLinkLists } from '../../../shared/_models/categoryLists.model';

import { UniversitiesService } from '../../../services/universities.service';


@Component({
  selector: 'app-main-college',
  templateUrl: './main-college.component.html',
  styleUrls: ['./main-college.component.scss']
})
export class MainCollegeComponent implements OnInit {


 facilities = false;

 mainUniversity: any;

 universityData: any;

 facultyDetails: any;

 basicInform: any;

 addressDetails: any;

 facilitiesDetails: any;

 admExamDetails: any;

 coursesDetails: any;

 data:any;

 address:any;

 facilitiesDetailsKeys: any;


 constructor( private route: ActivatedRoute, private universitiesService: UniversitiesService,
              private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe((params:Params) => {
      this.mainUniversity = params['id'];
     });

    console.log(this.mainUniversity , 'main university id');

    this.getUniversityData(this.mainUniversity);

  }

  ngOnDestroy(){  
  }


  getUniversityData(universityID){
    this.universitiesService.getMainUniversityRequest(universityID).subscribe(
      mainUniversity => {
          this.mainUniversity = mainUniversity;
          console.log(this.mainUniversity , 'unicount');
          this.universityData = this.mainUniversity.data.university;
          console.log(this.universityData , 'university data id'); 

          this.basicInform = this.universityData.basicInfo;
          //console.log(this.basicInform , 'university data address'); 

          this.facultyDetails = this.universityData.facultyDetails.faculty;
          //console.log(this.facultyDetails , 'university data facultyDetails'); 

          this.facilitiesDetails = this.universityData.facilities;
          //console.log(this.facilitiesDetails , 'university data facilitiesDetails'); 

          this.addressDetails = this.universityData.address;
          // console.log(this.addressDetails , 'university data address');

          this.admExamDetails = this.universityData.admissionDetails.exams;
         // console.log(this.admExamDetails , 'university data admissionDetails'); 

          this.coursesDetails = this.universityData.coursesDetails;
          //console.log(this.coursesDetails , 'university data admissionDetails'); 
            
      },
      (error) => console.log(error)
    );
  }
 

  categoryLinkLists: CategoryLinkLists[] = [
  new CategoryLinkLists('info'),
  new CategoryLinkLists('course & fee'),
  new CategoryLinkLists('admissions'),
  new CategoryLinkLists('placements'),
  new CategoryLinkLists('scholarship'),
  new CategoryLinkLists('faculty'),
  new CategoryLinkLists('reviews')];

}
