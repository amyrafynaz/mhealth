import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { SharedService } from '../service/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {
  arr:any;
  favyo:any;
  efavyo:any;
  constructor(
    private fb:FirebaseService,
    private shared:SharedService,
    private router:Router
  ) { }

  ngOnInit() {
    this.favyo = [];
    this.arr = this.shared.getAlphArray();
    this.subscribeToFav();
  }

  async subscribeToFav(){
    let loading = await this.shared.loading("Fetching Favorite List!");
    loading.present();
    let fav = await this.fb.getFav();

    fav.subscribe(async (data) => {
      this.favyo = [];
      this.efavyo = [];
      let temp = [];
      data.map(r => {        
        let datas = r.payload.doc.data();
        datas["fid"] = r.payload.doc.id;
        temp.push(datas);
      });

      let diseas = await this.fb.getDisease();
      diseas.subscribe(d => {
        this.arr = this.shared.getAlphArray();
        for(let i = 0; i < d.length; i++){
          for(let j = 0; j < temp.length; j++){
            if(temp[j]["id"] == d[i]["id"]){
              d[i]["fid"] = temp[j]["fid"];
              this.favyo.push(d[i]);
            }
          }
        }

        this.efavyo = [];
        this.segregate(this.favyo,loading);
      }, e => {
        console.log(e);
      })
    }, err => {
      console.log(err);
    });
  }

  segregate(data, loading){
    for(let i = 0; i < this.arr.length; i++){
      for(let j = 0; j < data.length; j++){
        if(this.arr[i].alph.toLowerCase() == data[j].name[0].toLowerCase()){
          this.arr[i].data.push(data[j]);
         break;
        }
      }
    }

    
    for(let i = 0; i < this.arr.length; i++){
      if(this.arr[i].data.length > 0){
        this.efavyo.push(this.arr[i]);
      }
    }

    console.log(this.efavyo);
    loading.dismiss();
  }

  go(data){
    console.log(data);
    this.shared.setDisease(data);
    this.shared.setFavOrDel(false);
    this.router.navigateByUrl('/info1');
  }

}
