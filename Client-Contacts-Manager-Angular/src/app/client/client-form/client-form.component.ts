import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  clientForm: FormGroup;

  // creating new FormControls, with validation
  firstname = new FormControl('', Validators.required);
  lastname = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  telephoneNumber = new FormControl('');
  companyName = new FormControl('', Validators.required);

  constructor(fb: FormBuilder) {
    this.clientForm = fb.group({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      telephoneNumber: this.telephoneNumber,
      companyName: this.companyName
    });
  }

  ngOnInit(): void {
  }
  saveClient() {
    console.log(this.clientForm);
  }

}
