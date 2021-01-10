import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddProductModalPage } from '../add-product-modal/add-product-modal.page';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: AddProductModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
