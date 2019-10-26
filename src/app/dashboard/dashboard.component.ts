import { User } from './../user';
import { ChartService } from './../service/chart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   usersData$:any=[];
   users$:Observable<User>
  constructor(private service:ChartService) { }

  ngOnInit() {
    this.getData()
  }

  getData(){
    //  this.service.getData().subscribe(data=>{
    //  this.usersData$=data['results']
    // })

    this.usersData$ = this.service.getData()
    console.log(this.usersData$)
    
  }

  onChild(value){
    console.log(value)
    this.users$=value

  }



}
