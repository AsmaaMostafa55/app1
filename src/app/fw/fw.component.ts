import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { products } from '../productsi';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-fw',
  templateUrl: './fw.component.html',
  styleUrls: ['./fw.component.css']
})
export class FwComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
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





  pid!:string;
  oneproduct!:products
  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductsService:ProductsService){}
  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe(
      // next:(d)=>{console.log( d["id"])}
     (p)=>{
      this.pid=p["id"]
      this._ProductsService.getspecProductApi(this.pid).subscribe({
        next:(res)=>{console.log(res.data)
        this.oneproduct=res.data;
        
        }
      })
     }
    )
  }

}
