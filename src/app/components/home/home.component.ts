import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input() forms: any[] = [];

  @Output() submittedForm = new EventEmitter<any>();

  formValues: any = {};


  onSubmit(formValues: any) {
    
    this.submittedForm.emit(this.formValues);
    console.log(formValues);
  }

}
