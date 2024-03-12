import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartitemsnumber:BehaviorSubject<any>=new BehaviorSubject(null);
userheader:any={token:localStorage.getItem("usertoken")};
  constructor(private _HttpClient:HttpClient) { }
  addtocartapi(pid:string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,{productId:pid},{
      headers:this.userheader
    })

  }



  updatecartitemquantityapi(pid:string,pcount:string):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${pid}`,{count:pcount},{
      headers:this.userheader
    })

  }


  getallcartitems():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,{headers:this.userheader})
  }


  removeitemapi(pid:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${pid}`,{headers:this.userheader})

  }

  clearcartapi():Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{headers:this.userheader})

  }


Addtowishlist(pid:string):Observable<any>{
return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{productId:pid},{headers:this.userheader})
}

removeproductwishlist(pid:string):Observable<any>{
return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${pid}`,{headers:this.userheader})
}


getuserwishlist():Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{headers:this.userheader})
}

}
