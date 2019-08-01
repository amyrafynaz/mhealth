import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { FirebaseService } from '../service/firebase.service';
import { Router } from '@angular/router';
import { SharedService} from '../service/shared.service';
import { getRenderedText } from '@angular/core/src/render3';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  register:{email:string, fullname:string, gender:string, age:number, height:number, weight:number, password:string};

  constructor(
  
    private fb:FirebaseService,
    private router: Router,
    private sharedservice: SharedService
		
  ) { }

  ngOnInit() {
    this.init();
  }

  init(){
    this.register = {
      email: "",
      fullname: "",
      gender: "",
      age: 0, 
      height: 0,
      weight: 0,
      password: ""
    }
  }

  async signup() {
    let loading = await this.sharedservice.loading("creating your account");
    loading.present(); 
    const signup = await this.fb.signup(this.register);
    if(signup.success){
      this.init();
      this.router.navigate(['/login']);
      }
     
      loading.dismiss();
      this.sharedservice.presentAlert(signup.success? 'Success' : 'Error', signup.value);
  } 

}