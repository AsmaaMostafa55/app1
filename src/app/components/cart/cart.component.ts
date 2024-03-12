import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { products } from 'src/app/productsi';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartitems:any[]=[];
  totalprice:string=""
  cartid:string=""
  constructor(private _CartService:CartService){}
  ngOnInit(): void {
    localStorage.setItem("currentPage","/cart");
    this._CartService.getallcartitems().subscribe({
      next:(res)=>{console.log(res.data.products)
      this.cartitems=res.data.products
      this.totalprice= res.data.totalCartPrice
      this.cartid=res.data._id
      
      },
      error:(err)=>{console.log(err)}
    }
    )
  }
  removeitembtn(pid:string){
  this._CartService.removeitemapi(pid).subscribe({
    next:(res)=>{console.log(res)
    this._CartService.cartitemsnumber.next(res.numOfCartItems)
    console.log(res.data.products)
    this.cartitems=res.data.products
    },
    error:(err)=>{console.log(err)}
  })
  console.log("hi")
}
updateitemquanbtn(whichbtn:string,pcount:string|number,pid:string){
//  alert(whichbtn)
if(whichbtn=='plus')
{
pcount=  (Number(pcount)+1).toString();
}
else
{
  pcount=  (Number(pcount)-1).toString();
  if(Number(pcount) ==0)
  {
    this.removeitembtn(pid);
  }
}
this._CartService.updatecartitemquantityapi(pid,pcount).subscribe({
  next:(res)=>{console.log(res)
  this.cartitems=res.data.products;

  
  },
  error:(err)=>{console.log(err)}
})
}

}
