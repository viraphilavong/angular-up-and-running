import { Component, OnInit } from '@angular/core';
import { Product } from "app/model/product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  public product: Product;

  constructor() { }

  ngOnInit() {
    this.product = {
      name: 'My Test Product',
      imageUrl: 'http://via.placeholder.com/150x150',
      price: 50,
      isOnSale: true,
      quantityInCart: 0
    };
  }

  incrementInCart() {
    this.product.quantityInCart++;
  }

  decrementInCart() {
    if (this.product.quantityInCart > 0) {
      this.product.quantityInCart--;
    }
  }

}
