import { Injectable } from '@angular/core';
import {AlertController, LoadingController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

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
}
