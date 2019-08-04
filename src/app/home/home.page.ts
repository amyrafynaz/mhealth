import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../service/firebase.service";
import { Router } from '@angular/router';
import { SharedService} from '../service/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private fb:FirebaseService,
    private router:Router,
    private shared:SharedService
  ) { }

  ngOnInit() {
  }

  async logout(){
    const loading = await this.shared.loading("Logging out your account");
    loading.present();
    await this.fb.logout();
    loading.dismiss();
    this.router.navigate(['/']);


  }
}
