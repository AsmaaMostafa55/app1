import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
interface accountDataInterface
{
  name?:string,
  email:string,
  password:string,
  repassword?:string,
  phone?:string,
  resetCode?:string,
  newPassword?:string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
userDataVar:BehaviorSubject<any>=new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient,private _Router:Router) { 
   if(localStorage.getItem("currentpage"))
   {
    _Router.navigate([localStorage.getItem("currentpage")])
    
   }
  }


  registerapi(rdata:accountDataInterface):Observable<any>{
  return  this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,rdata)
  }
  saveDataMethod(){
    if(localStorage.getItem("usertoken")!=null)
    {this.userDataVar.next(localStorage.getItem("usertoken"))
  console.log(this.userDataVar);
  this.userDataVar.next(jwtDecode(this.userDataVar.getValue()));
  // console.log(this.userDataVar.getValue());
  }
  else{
    this.userDataVar.next(null);
  }

  }
  loginapi(rdata:accountDataInterface):Observable<any>{

return  this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,rdata)
  }
  forgetapi(rdata:accountDataInterface):Observable<any>{

return  this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,rdata)
  }
  verfiyapi(rdata:accountDataInterface):Observable<any>{

return  this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,rdata)
  }
  newpasswordapi(rdata:accountDataInterface):Observable<any>{

return  this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,rdata)
  }




}
