import { Component } from '@angular/core';
import { CheckboxControlValueAccessor, FormControl, FormGroup, Validators } from '@angular/forms';
import { userService } from 'src/app/servicios/userServices';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  value = 0;



  //Form 1

  name: FormControl = new FormControl('', Validators.required);
  lastname: FormControl = new FormControl('', Validators.required);
  email: FormControl = new FormControl('', Validators.email);
  age: FormControl = new FormControl('', Validators.required);
  quota: FormControl = new FormControl('', Validators.required);//gender custom


  //Form 1
  firstFormGroup: FormGroup = new FormGroup({
    name: this.name,
    lastname: this.lastname,
    email: this.age,
    age: this.age,
    quota: this.quota

  });

  constructor(private userServices: userService) { }
  Click(data: User) {

    // console.log(datos);

    if(this.name.valid && this.lastname.valid && this.email.valid && this.age.valid && this.quota.valid) {
      console.log("dsa");
      this.value = 100;
      this.userServices.addUser(data).subscribe(data => console.log("data: " + data));
    }
  }
}
export interface User {
  name: string;
  lastname: string;
  email: string;
  age: number;
  quota: number;

}