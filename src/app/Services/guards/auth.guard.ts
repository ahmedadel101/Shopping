import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authS: AuthService, private rout: Router) { }


  canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
    return new Promise(resolve => {
      this.authS.user.subscribe(user => {
        if (user) resolve(true)
        else this.rout.navigate(['/Login'])
        resolve(false)
      })
    })
  }
}
