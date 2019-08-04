import { Injectable } from '@angular/core';
import {AlertController, LoadingController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  disease:any;
  favOrDel:any;
  constructor(
    private alertController: AlertController,
    private loadingController: LoadingController
  ) { }

  async presentAlert(title, content){
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    })

    await alert.present()
  }

  async loading(message){
    const loading = await this.loadingController.create({
      message: message
    });

    return loading;
  }

  setDisease(disease){
    this.disease = disease;
  }

  getDisease(){
    return this.disease;
  }

  setFavOrDel(favOrDel){
    this.favOrDel = favOrDel;
  }

  getFavOrDel(){
    return this.favOrDel;
  }

  getAlphArray(){
    return [
      {alph: "A", data: []},
      {alph: "B", data: []},
      {alph: "C", data: []},
      {alph: "D", data: []},
      {alph: "E", data: []},
      {alph: "F", data: []},
      {alph: "G", data: []},
      {alph: "H", data: []},
      {alph: "I", data: []},
      {alph: "J", data: []},
      {alph: "K", data: []},
      {alph: "L", data: []},
      {alph: "M", data: []},
      {alph: "N", data: []},
      {alph: "O", data: []},
      {alph: "P", data: []},
      {alph: "Q", data: []},
      {alph: "R", data: []},
      {alph: "S", data: []},
      {alph: "T", data: []},
      {alph: "U", data: []},
      {alph: "V", data: []},
      {alph: "W", data: []},
      {alph: "X", data: []},
      {alph: "Y", data: []},
      {alph: "Z", data: []},
    ];
  }
}
