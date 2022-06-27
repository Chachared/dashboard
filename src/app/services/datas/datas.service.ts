import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Stats} from "../../models/stats";

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  endpoint: string = 'https://localhost:8000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getStats(): Observable<Stats> {
    return this.http.get<Stats>(this.endpoint +'/stats');
  }
}
