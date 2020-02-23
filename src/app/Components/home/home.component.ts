import { Component, OnInit, OnDestroy } from '@angular/core';
import { Goods } from 'src/app/interface/Goods.interface';
import { GoodService } from 'src/app/Services/good.service';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy {

  goods: Goods[] = [];

  goodsObservable: Subscription;

  add:number = -1;

  constructor(private getHttp:GoodService, private cartS: CartService) { }

  ngOnInit(): void {
    this.goodsObservable = this.getHttp.getGoods().subscribe(data => {
      this.goods = data.map(search => { return {
        id: search.payload.doc.id,
        name: search.payload.doc.data()['name'],
        price: search.payload.doc.data()['price'],
        photoUrl: search.payload.doc.data()['photoUrl']
      }
      })
    });
  }
  ngOnDestroy(){
    this.goodsObservable.unsubscribe();
  }

  AddToCart(index: number){
   this.add = +index;
      
  }
  buy(amount: number){
    let selcGood = this.goods[this.add]
    let data = {
      name: selcGood.name,
      amount: +amount,
      price: selcGood.price
    }
    this.cartS.addToCart(data).then( () => this.add = -1)
  }
}
