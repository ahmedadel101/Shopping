import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Users } from 'src/app/interface/users.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errMsg
  constructor( private authS: AuthService ,private route: Router ) { }

  ngOnInit(): void {
  }

  login(form){
    let data : Users = form.value
    this.authS.login(data.email, data.pass)
    .then(() => this.route.navigate(['""']))
    .catch(err => {
      this.errMsg = err.message;
    })

  }

}
