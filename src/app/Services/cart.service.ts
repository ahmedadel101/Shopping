import { Injectable } from '@angular/core';
import { Goods } from '../interface/Goods.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { $, $$ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fireS: AngularFirestore , private authS:AuthService) { }

  addToCart(data: Goods){
   return this.fireS.collection(`users/${this.authS.userId}/cart`).add(data);
  }

  getCarts(){
    return this.fireS.collection(`users/${this.authS.userId}/cart`).snapshotChanges();
  }
}
