import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items: any[];

  constructor(public navCtrl: NavController, 
    public http: HttpClient,
    public navParams: NavParams) {

    this.http.get('https://restcountries.eu/rest/v2/all').subscribe((response:any) => {
      this.items = response;
    }, err => {
      console.log(err);
    });

  }

}
