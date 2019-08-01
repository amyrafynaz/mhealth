import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { FirebaseService } from '../service/firebase.service';
import { Router } from '@angular/router';
import { SharedService} from '../service/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

user:{email:string, password:string};

  constructor(
    public afAuth: AngularFireAuth,
    private fb: FirebaseService,
    private router: Router,
    private sharedservice: SharedService
    ) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.user = {
      email: "",
      password: ""
    }
  }

  async login(){
    let loading = await this.sharedservice.loading("login into your account");
    loading.present();
    
      const log = await this.fb.login(this.user);
      if(log.success){
        console.log(log);
        this.init();
        loading.dismiss();
        this.router.navigate(['/tab/home']);
      } else {
        loading.dismiss();
        this.sharedservice.presentAlert(log.success? 'Success' : 'Error', log.value);
      }
		
		}
}
