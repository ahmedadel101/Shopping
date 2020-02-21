import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { users } from 'src/app/interface/users.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authS: AuthService) { }

  ngOnInit(): void {
  }

  signUp(form){
    let data: users  =  form.value
    this.authS.signup(data.email, data.password)
  }
}
