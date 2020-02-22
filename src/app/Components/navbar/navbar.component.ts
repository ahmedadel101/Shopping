import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authS:AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authS.logout().then(( ) => console.log("out"))
  }

}
