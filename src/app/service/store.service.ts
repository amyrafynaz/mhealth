import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private storage:Storage
  ) { }


  setUser(user){
    this.storage.set('user', user);
  }

  getUser(){
    return this.storage.get('user');
  }

  setFav(fav){
    this.storage.set('fav', fav);
  }

  getFav(){
    return this.storage.get('fav');
  }

  clear(){
  	return this.storage.clear();
  }
}
