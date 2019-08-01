import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { SWITCH_COMPILE_NGMODULE__POST_R3__ } from '@angular/core/src/metadata/ng_module';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private afauth: AngularFireAuth,
    private afstore: AngularFirestore,
  ) { }

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
}

