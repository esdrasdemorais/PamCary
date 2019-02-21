import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.messageForm = this.formBuilder.group({
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          phone: ['', Validators.required],
          subject: ['', Validators.required],
          title: ['', Validators.required],
          body : ['', [Validators.required, Validators.minLength(7)]]
      });
  }
  
  get f() { return this.messageForm.controls; }
  
  onSubmit() {
      this.submitted = true;

      if (this.messageForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.messageForm.value));
  }
}