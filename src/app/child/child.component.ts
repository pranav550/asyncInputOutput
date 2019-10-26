import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  isDisplay:boolean=false;
@Input() name:any=[];
latestValue:any=[];
pageSizeOptions: number[] = [5, 10, 25, 100];
itemIndex:any;
itemSize:any;
isActive:boolean;
  constructor() { }

  ngOnInit() {
    this.isActive=false;
  }

  ngOnChanges(changes: SimpleChanges){
    this.isActive=true;
    // console.log(changes.name.currentValue.count)
    let detect = changes.name.currentValue
      if(detect!=null && detect['count']!=null){
    this.latestValue=changes.name.currentValue.results.length
    console.log(this.latestValue)
    }
    
  }

  getServerData(event){
    this.itemIndex=event.pageIndex
    this.itemSize=event.pageSize
    this.isDisplay=true
  }
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

}
