import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Subject } from '../subject';
import { Message } from '../message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  subjects: Array<Subject> = [];
  @Output() getMessages: EventEmitter<Array<Message>> = 
      new EventEmitter<Array<Message>>();
  
  public customPatterns = {'S': { pattern: new RegExp('\[a-zA-Z \]')}};
  
  constructor(
      private formBuilder: FormBuilder,
      private apiService: ApiService 
  ) { }

  ngOnInit() {
      this.messageForm = this.formBuilder.group({
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          phone: ['', [Validators.min(11), Validators.pattern('[0-9]*')]],
          subject: ['', Validators.required],
          title: ['', Validators.required],
          body : ['', [Validators.required, Validators.minLength(7)]],
          createdAt: [new Date(), [Validators.required]]
      });
      
      this.getSubjects();
  }
  
  getSubjects() {
      this.subjects = this.apiService.getSubjects();
  }
  
  get f() { return this.messageForm.controls; }
  
  save(message: Message) {
      let messages: Array<Message> = this.apiService.saveMessage(message);
      this.getMessages.emit(messages);
  }
  
  onSubmit() {
      this.submitted = true;

      if (this.messageForm.invalid) {
          return;
      }

      this.save(this.messageForm.value);
      
      this.messageForm.reset();
      //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.messageForm.value));
  }
}