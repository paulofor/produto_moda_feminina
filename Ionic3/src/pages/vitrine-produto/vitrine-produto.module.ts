import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VitrineProdutoPage } from './vitrine-produto';

@NgModule({
  declarations: [
    VitrineProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(VitrineProdutoPage),
  ],
})
export class VitrineProdutoPageModule {}
