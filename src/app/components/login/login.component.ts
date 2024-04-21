import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  forms: any = [
    {
      name: "firstname",
      type: "text",
      placeholder: "Enter your firstname",
      value: "",
      error: "Please enter valid firstname"
    },
    {
      name: "surname",
      type: "text",
      placeholder: "Enter your surname",
      value: "",
      error: "Please enter valid surname"
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      value: "",
      error: "Please enter valid email"
    },

  ]

  handleSubmittedForm(formValues: any) {
    console.log('Submitted Form:', formValues);
  }


}
