import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
    private alertCtrl: AlertController) {

  }

  sayHello() {
    let alert = this.alertCtrl.create({
      title: 'Greeting',
      message: 'Hello World',
      buttons: [
        {text: 'OK'}
      ]
    });
    alert.present();
  }

}
