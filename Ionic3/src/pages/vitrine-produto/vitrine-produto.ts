import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VitrineProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vitrine-produto',
  templateUrl: 'vitrine-produto.html',
})
export class VitrineProdutoPage {


  //produtos: Produto[];
  total: number;
  idPedido: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VitrineProdutoPage');
    this.total = 3;
  }

}
