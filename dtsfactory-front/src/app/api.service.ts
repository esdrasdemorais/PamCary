import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from './subject';
import { SUBJECTS } from './subject-mock';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: String = 'http://localhost:8177/Drones';
    
  subjects = SUBJECTS;

  constructor(private httpClient: HttpClient) { }
  
  getSubjects() {
      //return this.httpClient.get<Subject[]>(`${this.apiURL}/subjects`);
      return this.subjects;
  }
}