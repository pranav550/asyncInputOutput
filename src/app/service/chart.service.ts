import { Constant } from './../constant';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ChartService {
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(Constant.url)
  }
}
