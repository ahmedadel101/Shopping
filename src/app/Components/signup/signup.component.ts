import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Users } from 'src/app/interface/users.interface';
import { UsersService } from 'src/app/Services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  errMsg: string = '' ;

  constructor(private authS: AuthService , private adUs: UsersService , private route:Router) { }

  ngOnInit(): void {
  }

  signUp(form){
    let data: Users  =  form.value
    this.authS.signup(data.email, data.pass)
    .then(result => {
      this.errMsg = '' 
      this.adUs.addNewUsers(result.user.uid, data.name, data.address).then(() => {
        this.route.navigate(['/']);
      })

    })
    .catch(err => {
      console.log('ar' , err)
      this.errMsg = err.message;
    })

  }
}
