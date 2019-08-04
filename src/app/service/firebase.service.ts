import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private afauth: AngularFireAuth,
    private afstore: AngularFirestore,
  ) { }

  async getUID(){
    const user = await this.afauth.authState.pipe(first()).toPromise();

    return user;
  }

  async signup(user){ 
    try{
      const res = await this.afauth.auth.createUserWithEmailAndPassword(user.email, user.password);
      delete user.password;
      await this.afstore.doc(`User/${res.user.uid}`).set(user);
      return{
        success: true,
        value: user.email
      };
    }catch(e){
      return{
        success: true,
        value: e.message
      };
    }
  }

  async login(user){ 
    try{
      const res = await this.afauth.auth.signInWithEmailAndPassword(user.email, user.password);
      return{
        success: true,
        value: user.email
      };
    }catch(e){
      return{
        success: true,
        value: e.message
      };
    }
  }

  async logout(){
    return await this.afauth.auth.signOut();
  }

  async getUser(){
    let user = await this.getUID();
    return await this.afstore.doc("User/" + user.uid).valueChanges();

  }

  async getDisease(){
    return await this.afstore.collection("disease").valueChanges();
  }

  async getDiseaseFoods(id){
    return await this.afstore.collection("foods", ref =>ref.where("id", "==", id)).valueChanges();
  }

  async getFav(){
    let user = await this.getUID();
    console.log(user.uid);
    return await this.afstore.collection("fav", ref =>ref.where("uid", "==", user.uid)).snapshotChanges();
  }

  async addFavorite(details){
    let user = await this.getUID();
    details.uid = user.uid; 
    return await this.afstore.collection('fav').add(details)
  }

  async delFavorite(fid){
    return await this.afstore.collection('fav').doc(fid).delete()
  }
}

