import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  searchInput: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const categoryIdFromRoute = Number(params.get('categoryId'));
      this.products = products.filter(product => product.categoryId === categoryIdFromRoute);
    });
  }

  like(product: Product) {
    product.likes++;
  }

  delete(product: Product) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
      window.alert('Product has been deleted');
    } else {
      window.alert('Product not found');
    }
  }

  share(id: number) {
    const url = "http://localhost:4200/products/" + id;
    const message = "Сафонов оплатить!";
    const telegramLink = `https://telegram.me/share/url?url=${url}&text=${message}`;
    window.location.href = telegramLink;
  }

  get filteredProducts(): Product[] {
    const searchTerm = this.searchInput.toLowerCase();
    return this.products.filter(product => product.name.toLowerCase().includes(searchTerm));
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/