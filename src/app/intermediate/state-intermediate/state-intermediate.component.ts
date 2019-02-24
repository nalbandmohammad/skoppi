import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';


//import { Subscription } from 'rxjs/Subscription';

import { StateUniversitiesList } from '../../shared/_models/stateUniList.model';

import { UniversitiesService } from '../../services/universities.service';

@Component({
  selector: 'app-state-intermediate',
  templateUrl: './state-intermediate.component.html',
  styleUrls: ['./state-intermediate.component.scss']
})
export class StateIntermediateComponent implements OnInit, OnDestroy{


 title='10+2';

 stateUniversitiesData: any;
 stateUniveristyData: any;
 stateuniversityArray = [];
 universitiesData = {};

 constructor( private route: ActivatedRoute, private universitiesService: UniversitiesService, private router: Router) { }

  ngOnInit(): void {

     this.route.params.subscribe((params:Params) => {
      this.stateUniversitiesData = params['state'];
     });

     console.log(this.stateUniversitiesData);

     this.getStateUniversities(this.stateUniversitiesData); 

 } 

  ngOnDestroy(){}
 

  getStateUniversities(stateCode){
     this.universitiesService.getUniversityRequest(stateCode).subscribe(
      stateUniversitiesData => {
          this.stateUniversitiesData = stateUniversitiesData;
          console.log(this.stateUniversitiesData ,'unicount');       
          this.stateUniveristyData = this.stateUniversitiesData.data.universities;
          console.log(this.stateUniveristyData , 'state  universities data');             
      },
      (error) => console.log(error)
    );
  }

   viewMainData(id){
    console.log(id , 'university id');
    this.router.navigate(['/main-intermediate', id]);
  } 

}
