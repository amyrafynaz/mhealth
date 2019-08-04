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
  constructor(
    private router: Router,
    private fb:FirebaseService,
    private shared:SharedService
    ) {
      this.arr = this.shared.getAlphArray();
      this.subscribeToDisease();
     }

  ngOnInit() {
  }

  async subscribeToDisease(){
    let loading = await this.shared.loading("Fetching Disease Information!");
    loading.present();
    console.log("DiseasesPage");
    let d = await this.fb.getDisease();
    console.log(d);
    d.subscribe(data => {
      if(data.length > 0){
        this.segregate(data,loading);
      }
    }, err => {
      console.log(err);
    });
  }

  segregate(data, loading){
    console.log(data);
    for(let i = 0; i < this.arr.length; i++){
      for(let j = 0; j < data.length; j++){
        if(this.arr[i].alph.toLowerCase() == data[j].name[0].toLowerCase()){
          this.arr[i].data.push(data[j]);
         break;
        }
      }
    }

    
    for(let i = 0; i < this.arr.length; i++){
      if(this.arr[i].data.length < 1){
        this.arr.splice(i, 1);
      }
    }

    console.log(this.arr);
    loading.dismiss();
  }

  atherosclerosis(){
    this.router.navigateByUrl('/info1');
  }

  coronery(){
    this.router.navigateByUrl('/info2');
  }

  heartattack(){
    this.router.navigateByUrl('/info3');
  }

  hypertensive(){
    this.router.navigateByUrl('/info4');
  }

  stroke(){
    this.router.navigateByUrl('/typedisease');
  }

  peripheral(){
    this.router.navigateByUrl('/info5');
  }
}
