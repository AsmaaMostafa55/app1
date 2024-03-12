import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  currentcartid:string=""
  constructor(private _ActivatedRoute:ActivatedRoute ,private _OrdersService:OrdersService){

  }
  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe((p)=>{
     this.currentcartid= p['id']
    })
  }
addreessform:FormGroup=new FormGroup({
  details:new FormControl(null),
  phone:new FormControl(null),
  city:new FormControl(null),
})
addreessformsubmit(){
 console.log(this.addreessform.value) 
 this._OrdersService.checkout(this.currentcartid,this.addreessform.value).subscribe({
  next:(res)=>{console.log(res.session.url)
  
  window.location.href=res.session.url;
  
  },
  error:(err)=>{console.log(err)}
 })
}
}
