import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogged: boolean = false ; 

  constructor(private authS:AuthService) { }

  ngOnInit(): void {
    this.authS.user.subscribe(user => {
     if (user){
      this.isLogged = true;
      this.authS.userId = user.uid
     } 

     else{
      this.isLogged = false;
      this.authS.userId = ""
     }  
    })
  }

  logout(){
    this.authS.logout().then(( ) => console.log("out"))
  }

}
