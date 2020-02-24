import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class GoodService {

  constructor(private fs:AngularFirestore , private fireStore: AngularFireStorage) { }

  getGoods(){
   return this.fs.collection('goods').snapshotChanges();
  }

  addNewGood(name: String, price: Number , image: File){
    return new Promise((resolve, reject) => {
        let ref = this.fireStore.ref('goods/' + image.name)
        ref.put(image).then(() => {
        ref.getDownloadURL().subscribe(photoUrl => {
          this.fs.collection('goods').add({
            name,
            price,
            photoUrl
          }).then(() => resolve('Done'))
        })
      })
    })
  }
}
