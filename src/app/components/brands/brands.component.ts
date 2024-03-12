import { Component } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {
  ngOnInit(): void {
    localStorage.setItem("currentPage","/brands")
  }

}
