import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginGuard implements CanActivate {
	constructor(private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
  	if(localStorage.status && localStorage.status=="done")
  	{
  		this.router.navigate(['/']);
  		return false;
  	}
  	else{
  		return true;
  	}
  }
}
