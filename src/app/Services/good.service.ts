import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GoodService {

  constructor(private http:AngularFirestore) { }

  getGoods(){
   return this.http.collection('goods').snapshotChanges();
  }
}
