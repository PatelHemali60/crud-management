import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {

  constructor(private bob:FormBuilder) { 

  }

   submitted = false;
   employeeform = new FormGroup({
 
  })

  ngOnInit(): void {
    this.buildProductForm();
  }

  buildProductForm() {
    this.employeeform = this.bob.group({
      id:[],
      firstname:[,[Validators.required]],
      Lastname:[,[Validators.required]],
      email:[,[Validators.required,Validators.email]],
      dob:[null,Validators.required],
      phoneNo:[,[Validators.required,Validators.minLength(10)]],
      gender:[null,Validators.required],
    
      department:[' ',Validators.required],
      // quantity: [null,[Validators.required,Validators.min(10)]],
      // stock: [true,Validators.required],
      // term: [false,Validators.requiredTrue]
    });
  }
  submitEmployee()
  {
    console.log('Hello');
    
  }
  get formValue(){
    return this.employeeform['controls'];
  }
}
