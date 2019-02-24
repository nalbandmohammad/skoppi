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
  selector: 'app-main-university',
  templateUrl: './main-university.component.html',
  styleUrls: ['./main-university.component.scss']
})
export class MainUniversityComponent implements OnInit {

 facilities = false;

 mainUniversity: any;

 universityData: any;

 facultyDetails: any;

 basicInform: any;

 addressDetails: any;

 facilitiesDetails: any;

 admExamDetails: any;

 courseDetails: any;

 galleries: any;

 data:any;

 address:any;

 facilitiesDetailsKeys: any;

 coursesStreams: any;

 scholarshipDets: any;

 degrees: any;

 affiliatedColleges: any;

 facultyName: any;

 facultyTitle: any;

    tabs: string[] = ['Engineering'];
    selectedtab= this.tabs[0];

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
          //console.log(this.mainUniversity, 'unicount');

          this.universityData = this.mainUniversity.data.university;
          console.log(this.universityData, 'university data id'); 

          this.basicInform = this.universityData.basicInfo;

          this.affiliatedColleges = this.universityData.basicInfo.affiliatedColleges;
         
          this.facultyDetail = this.universityData.facultyDetails.faculty; 

          for(var i = 0; i < this.facultyDetail.length; i++){             
             this.facultyName = this.facultyDetail[i].name;
             this.facultyTitle = this.facultyName.charAt(0);    
          }

          this.facilitiesDetails = this.universityData.facilities;   

          this.addressDetails = this.universityData.address;

          this.admExamDetails = this.universityData.admissionDetails.exams;

          this.courseDetails = this.universityData.coursesDetails.courses;
          console.log(this.courseDetails , 'university data coursesDetails'); 

          for(var i = 1; i < this.universityData.coursesDetails.courses.length; i++){
             this.tabs.push(this.courseDetails[i].degree);
          }

          this.galleries = this.universityData.galleries; 

          this.scholarshipDets = this.universityData.scholarshipDetails;

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
