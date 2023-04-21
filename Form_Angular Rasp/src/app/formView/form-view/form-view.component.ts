import { Component, OnInit } from '@angular/core';
import { userService } from '../../servicios/userServices';
@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent {
  user: User[] = [];
  userDni: any = "";
  userName: any = "";
  userSurname: any = "";
  userPhone: any = "";
  userEmail: any = "";
  userGender: any = "";
  userBirthday: any = "";
  userExperience: any = "";
  userWork: any = "";


  constructor(private usersService: userService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((user: User[]) => { this.user = user; this.usersService.getUsers() });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.user = this.user.filter(user => user.name.toLowerCase().includes(filterValue));
  }
}


export interface User {
  name: string;
  lastname: string;
  email: string;
  age: number;
  quota: number;
}