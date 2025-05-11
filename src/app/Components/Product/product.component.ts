import { Component, OnInit } from "@angular/core";
import { Product } from "../../Models/product";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component ({
    selector: 'app-product',
    imports: [CommonModule, FormsModule],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css'
})

export class ProductComponent implements OnInit {

    productList: Product[] = [
        { productName: 'HP Pavilion x360', categoryName: 'Computers', quantity: 4 },
        { productName: 'Samsung Galaxy S24', categoryName: 'Mobiles', quantity: 5 }
    ];

    newProduct: Product = { productName: '', categoryName: '', quantity: 0 }

    constructor() {

    }

    ngOnInit(): void {
        
    }

    AddProduct() {
        if(this.newProduct.productName && this.newProduct.categoryName && this.newProduct.quantity > 0) {
            this.productList.push({ ...this.newProduct });
        }
    }

}
