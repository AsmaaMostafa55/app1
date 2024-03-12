import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { products } from 'src/app/productsi';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/cart.service';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';
// Import service from the library

// import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories:any[]=[];
  searchterm:string='';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  mainslider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
   items:1,
    nav: true
  }





  isclick:boolean=false;
//getallproduct
  productList:products[]=[];
  isloading:boolean=true;
  constructor(private _ProductsService:ProductsService,private _CartService:CartService,private toastEvokeService: ToastEvokeService){}
  ////getallproduct
  ngOnInit(): void {
    ////getallproduct
    // localStorage.setItem("currentPage","/home")
 this._ProductsService.getProductsApi().subscribe({
next:(response)=>{
  this.productList=response.data;
  this.isloading=false;
  console.log(response.data)},
error:(err)=>{console.log(err)}

 })


 //get all categories
 this._ProductsService.getcategories().subscribe(
  {next:(response)=>{this.categories=response.data},
error:(err)=>{console.log(err)}
}
 )

  }
addtocartbtn(pid:string){
this._CartService.addtocartapi(pid).subscribe({
  next:(response)=>{console.log(response.message)
    this.toastEvokeService.success('sucess', response.message).subscribe();
    console.log(response.numOfCartItems)
    this._CartService.cartitemsnumber.next(response.numOfCartItems);
  },error:(err)=>{console.log(err)}
})
  // alert(pid);
//  this.isclick=true;


  // document.getElementById("add to wishlist")?.style.color="#3DA2DA";

}

// hamada2(){
//   this.isclick=false;
// }

  
}
