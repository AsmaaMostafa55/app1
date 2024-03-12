import { Component } from '@angular/core';
import { FormControl,FormGroup ,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isloading:boolean=false;
errmessage!:string;
  constructor(private _AuthService:AuthService,private _Router:Router){}

RegisterForm:FormGroup=new FormGroup({
name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
email:new FormControl(null,[Validators.required,Validators.email]),
password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z].{6}/) ]),
rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z].{6}/) ]),
phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)  ])

},this.hamada)
registerformmethod(){
  this.isloading=true;
 
  // console.log(this.RegisterForm)
  this._AuthService.registerapi(this.RegisterForm.value).subscribe({
    next:(response)=>{console.log(response)
      this.isloading=false;
      // this._Router.navigate(['/Login'])




    },
    error:(err)=>{
      this.isloading=false;
    this.  errmessage=err.error.message}

  })
}


hamada(g:any){
  if(g.get('password')?.value == g.get('rePassword')?.value)
  {return null}
else{
return  {"matchedpassword":true}
}

}
}
