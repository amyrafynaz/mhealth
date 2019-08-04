import { Component, OnInit, ViewChild } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { SharedService } from '../service/shared.service';
import {IonSlides} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info1',
  templateUrl: './info1.page.html',
  styleUrls: ['./info1.page.scss'],
})
export class Info1Page implements OnInit {
  info = {
    img: "",
    id: "",
    desc:"",
    name:""
  };
  food:any;
  page:any;
  favb:any;
  @ViewChild('alph') slider: IonSlides;
  constructor(
    private shared:SharedService,
    private fb:FirebaseService,
    private router:Router
  ) {
    this.page = 0;
   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.init();
  }

  async init(){
    let loading = await this.shared.loading("Fetching Disease Information!");
    loading.present();
    this.favb = this.shared.getFavOrDel();
    this.info = this.shared.getDisease();
    console.log(this.info.id);
    this.food = [];

    let food = await this.fb.getDiseaseFoods(this.info.id);

    food.subscribe(data => {
      this.food = data;
      console.log(this.food);
      loading.dismiss();
    }, err => {
      console.log(err);
    })
  }

  async addToFavorite(){
    let loading = await this.shared.loading("Adding to Favorite!");
    loading.present();
    await this.fb.addFavorite({id:this.info.id});
    loading.dismiss();
  }

  async rmToFavorite(){
    let loading = await this.shared.loading("Removing Diseases Information from Favorite!");
    loading.present();
    await this.fb.delFavorite(this.info["fid"]);
    loading.dismiss();
    this.router.navigateByUrl('/tab/food');
  }

}
