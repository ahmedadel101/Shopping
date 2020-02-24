import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Shopping } from 'src/app/interface/shopping.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Shopping[]= [];

  constructor(private cartS:CartService) { }

  ngOnInit(): void {
    this.cartS.getCarts().subscribe(cart => {
      this.cart = cart.map(Shop => {
        return{
          id: Shop.payload.doc.id,
          photoUrl: Shop.payload.doc.data()['photoUrl'],
          name: Shop.payload.doc.data()['name'],
          amount: Shop.payload.doc.data()['amount'],
          price: Shop.payload.doc.data()['price']
        }
      })
      console.log(this.cart)
    })
  }

  delete(index){
    this.cartS.delete(this.cart[index].id)
  }
  
  save(index){

    this.cartS.save(this.cart[index].id, this.cart[index].amount)
  }

}
