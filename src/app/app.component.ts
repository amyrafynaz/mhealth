import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FirebaseService } from './service/firebase.service';
import { SharedService } from './service/shared.service';
import { StoreService } from './service/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fb:FirebaseService,
    private router:Router,
    private shared:SharedService,
    private store:StoreService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {

      let user = await this.fb.getUID();
      
      if(user !== null){
        this.subscribeToUser();
        this.router.navigate(['/tab/home']);
      } 

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async subscribeToUser(){
    // let d = await this.fb.getUser();
    // d.subscribe(data => {
    //   this.store.setUser(data);
    //   console.log(data);
    // }, err => {
    //   console.log(err);
    // });
  }
}
