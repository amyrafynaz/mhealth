import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../service/firebase.service';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.page.html',
  styleUrls: ['./diseases.page.scss'],
})
export class DiseasesPage implements OnInit {
  arr:any;
  earr:any;
  constructor(
    private router: Router,
    private fb:FirebaseService,
    private shared:SharedService
    ) {
      this.earr = [];
      this.arr = this.shared.getAlphArray();
      this.subscribeToDisease();
     }

  ngOnInit() {
  }

  async subscribeToDisease(){
    let loading = await this.shared.loading("Fetching Disease List!");
    loading.present();
    console.log("DiseasesPage");
    let d = await this.fb.getDisease();
    d.subscribe(data => {
      if(data.length > 0){
        this.earr = [];
        this.arr = this.shared.getAlphArray();
        this.segregate(data,loading);
      }
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
        this.earr.push(this.arr[i]);
      }
    }

    console.log(this.earr);
    loading.dismiss();
  }

  go(data){
    console.log(data);
    this.shared.setDisease(data);
    this.shared.setFavOrDel(true);
    this.router.navigateByUrl('/info1');
  }
}
