import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from './subject';
import { SUBJECTS } from './subject-mock';
import { Message } from './message';
import { MESSAGES } from './message-mock';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: String = 'http://localhost:8177/Drones';
    
  subjects: Array<Subject> = SUBJECTS;
  messages: Array<Message> = MESSAGES;
  
  constructor(/*private httpClient: HttpClient*/) { }
  
  getSubjects() {
      //return this.httpClient.get<Subject[]>(`${this.apiURL}/subjects`);
      return this.subjects;
  }
  
  getMessages() {
      return this.messages;
  }
  
  removeMessage(message: Message) {
      const index: number = this.messages.indexOf(message);
      if (index !== -1)
          this.messages.splice(index, 1);
      return this.messages;
  }
  
  saveMessage(message: Message) {
      this.messages.push(message);
      return this.messages;
  }
}