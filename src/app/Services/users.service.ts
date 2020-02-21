import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private fireStore: AngularFirestore) { }

  addNewUsers(id, name, address){
    return this.fireStore.doc('users/' + id).set({
       name , 
       address
    })
  }
}
