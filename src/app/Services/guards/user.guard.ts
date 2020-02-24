import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard {

  constructor(private authS: AuthService , private rout: Router) { }

  canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
    return new Promise(resolve => {
      this.authS.user.subscribe(user => {
        if (user){
          this.rout.navigate(['/Home'])
          resolve(false)
        } 
        else
        resolve(true)
      })
    })
  }
}
