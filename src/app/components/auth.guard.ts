import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
export const authGuard: CanActivateFn = (route, state) => {

  let _Router:Router=  inject(Router);
  let _AuthService:AuthService=inject(AuthService)
if(localStorage.getItem("usertoken")==null)
{
  _Router.navigate(['/Login']);
  return false
}
else{

  _AuthService.saveDataMethod()
  return true;
}

  return true;


};
