import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.comonent.html',
  styleUrls: ['./product.componet.css']
})
export class ProductComponent {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}
