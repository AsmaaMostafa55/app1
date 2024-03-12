import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  isloading:boolean=false;
  forgetFlag:boolean=true;
  verfiyFlag:boolean=false;
  newPasswordFlag:boolean=false;



  errmessage!:string;
    constructor(private _AuthService:AuthService,private _Router:Router){}
  
  loginForm:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z].{6}/) ]),

  
  })
//first form
  forgetForm:FormGroup=new FormGroup({
email:new FormControl(null,[Validators.required,Validators.email]),


  })
  //second form
  verfiyForm:FormGroup=new FormGroup({
    resetCode:new FormControl(null,[Validators.required]),
    
    
      })
      //third Form
      newPasswordForm:FormGroup=new FormGroup({
        email:new FormControl(null,[Validators.required,Validators.email]),
        newPassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z].{6}/)])
        
          })

          forgetSubmitMethod(){




            this.isloading=true;
   
            // console.log(this.loginForm)
            this._AuthService.forgetapi(this.forgetForm.value).subscribe({
              next:(response)=>{console.log(response)
                this.isloading=false;
        
                if(response.message){
                 console.log('tmam')
                 this.forgetFlag=false;
                 this.verfiyFlag=true;
                
                }
                // this._Router.navigate(['/login'])
              },
              error:(err)=>{
                this.isloading=false;
              this.  errmessage=err.error.message}
          
            })
          }

          verfiySubmitMethod(){

            this.isloading=true;
   
            // console.log(this.loginForm)
            this._AuthService.verfiyapi(this.verfiyForm.value).subscribe({
              next:(response)=>{console.log(response)
                this.isloading=false;
        
                if(response.status=="sucess"){
                 console.log(' verfiy tmam')
                 this.forgetFlag=false;
                 this.verfiyFlag=false;
                 this.newPasswordFlag=true;
                
                }
                // this._Router.navigate(['/login'])
              },
              error:(err)=>{
                this.isloading=false;
              this.  errmessage=err.error.message}
          
            })

          }
          newPasswordSubmitMethod(){

            this.isloading=true;
   
            // console.log(this.loginForm)
            this._AuthService.newpasswordapi(this.newPasswordForm.value).subscribe({
              next:(response)=>{console.log(response)
                this.isloading=false;
        
                if(response.token){
                 console.log(' verfiy tmam')
                
                }
                // this._Router.navigate(['/login'])
              },
              error:(err)=>{
                this.isloading=false;
              this.  errmessage=err.error.message}
          
            })

          }

          
        
     
        




            

          

  
  Loginformmethod(){
    this.isloading=true;
   
    // console.log(this.loginForm)
    this._AuthService.loginapi(this.loginForm.value).subscribe({
      next:(response)=>{console.log(response)
        this.isloading=false;

        if(response.message=="success"){
          localStorage.setItem("usertoken",response.token);
          this._AuthService.saveDataMethod()
            this._Router.navigate(['/home'])
          
        
        }
        // this._Router.navigate(['/login'])
      },
      error:(err)=>{
        this.isloading=false;
      this.  errmessage=err.error.message}
  
    })
  }

}
