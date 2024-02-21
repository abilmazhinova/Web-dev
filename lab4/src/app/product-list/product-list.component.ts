import { Component } from '@angular/core';


import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  
share(id: number) {

  const url = "http://localhost:4200/products/" + id;
  const message = "Сафонов оплатить!"; 
  const telegramLink = `https://telegram.me/share/url?url=${url}&text=${message}`;

  window.location.href = telegramLink;

}
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/