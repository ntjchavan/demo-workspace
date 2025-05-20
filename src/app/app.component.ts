import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./Components/Product/product.component";
import { Product } from './Models/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular18';

  applicateName: string = "Online Shopping App"
  productData!: Product;
  hasProductAvailable: boolean = false;

  ngOnInit(): void {
    
  }

  GetProductData(data: Product) {
    //this.productData = { ...data };
    this.hasProductAvailable = true;
    this.productData = data;

    console.log('2', this.productData);
  }

}
