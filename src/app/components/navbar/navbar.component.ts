import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private _AuthService:AuthService,private _Router:Router ,private _CartService:CartService){}
  islogin:boolean=false;
  cartitemnavbar:string=""
ngOnInit(): void {

  this._CartService.cartitemsnumber.subscribe(()=>{

 this.cartitemnavbar=this._CartService.cartitemsnumber.getValue()   
  })
//  this.cartitemnavbar= this._CartService.cartitemsnumber;
this._AuthService.userDataVar.subscribe(
  ()=>{
    if(this._AuthService.userDataVar.getValue()==null){
      this.islogin=false;

    }
    else{
      this.islogin=true;
    }
  }
 
)

  

}

logout(){
  localStorage.removeItem("usertoken");
  // this._AuthService.userDataVar=
  this._AuthService.saveDataMethod();
  this._Router.navigate(['/Login'])
}
}
